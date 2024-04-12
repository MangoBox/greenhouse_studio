import * as React from "react";
import { useState, useEffect } from "react";
import DataDisplay from "./DataDisplay";
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

const displayMetadata = {
    'temperature' :
    {
        title: 'Temperature',
        suffix: '°C',
        minValue: 0,
        maxValue: 50
    },
    'humidity' :
    { 
        title: 'Humidity',
        suffix: '%',
        buttons: [{name: 'Open Vents'}, {name: 'Close Vents'}]
    }
};

function CreateDisplayComponent(key, points) {
    //If we haven't specified to display this key, return nothing 
    if(!displayMetadata[key]) {
        return;
    }

    var suffix = displayMetadata[key].suffix ?? '';
    var prefix = displayMetadata[key].prefix ?? '';
    var minValue = displayMetadata[key].minValue ?? 0;
    var maxValue = displayMetadata[key].maxValue ?? 100;
    var buttons = displayMetadata[key].buttons ?? null;
    var title = displayMetadata[key].title ?? key.charAt(0).toUpperCase() + key.slice(1);
    var value = points[key] ?? 0;

    return (
        <Box>
            {DataDisplay(title, value, prefix, suffix, minValue, maxValue, buttons)}
        </Box>
    );
}

function DataPanel() {
    const [points, setPoints] = useState(null);

    useEffect(() => {
    fetch('/getEnvironmentData')
        .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error))
        .then((points) => {
            setPoints(points);
        }).then(data => console.log(data));
    }, []);


    // Display time component.
    var last_updated = points ? points['time'] ?? "Loading..." : "Loading..."; 
    var last_updated_display = <Box>Loading...</Box>;;
    if(last_updated != "Loading...") {
        var now = Date.now();
        var delta = now - Date.parse(last_updated);
        
        var minutes = Math.floor(delta / (1000 * 60)); 
        if (minutes < 60) {
            last_updated_display = <Box>Last updated: {minutes}min ago</Box>;
        } else if (minutes < 1440) {
            var hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
            last_updated_display = <Box>Last updated: {hours}h {minutes}min ago</Box>;
        } else {
            var days = Math.floor(minutes / 1440);
            minutes = minutes % 1440;
            var hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
            last_updated_display = <Box>Last updated: {days}d {hours}h {minutes}min ago</Box>;
        }
        
    }
    

    console.log(points);

    var displays = !points ? <CircularProgress color="success"/> : Object.keys(points).map((key) => 
        <Box>
            {CreateDisplayComponent(key, points)}
        </Box>
    );
    
    // points.map((point) => 
    //         <Box>
    //             {DataDisplay(point.title, point.value, point.prefix, point.suffix, point.minValue, point.maxValue, point.buttons)}
    //         </Box>
    // );

    return (
    <>
        {last_updated_display}
        {displays}
    </>);
}

export default DataPanel;