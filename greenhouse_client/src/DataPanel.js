import * as React from "react";
import { useState, useEffect } from "react";
import DataDisplay from "./DataDisplay";
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

// This display metadata provides the information needed to display the data.
// It provides context for the data, including what buttons, suffixes and prefixes
// are to be provided.
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
    //If we haven't specified to display this key, return nothing.
    if(!displayMetadata[key]) {
        return;
    }

    // Automatically formats the data to be displayed, based on the metadata
    // and providing a fallback value should no metadata be provided.
    var suffix = displayMetadata[key].suffix ?? '';
    var prefix = displayMetadata[key].prefix ?? '';
    var minValue = displayMetadata[key].minValue ?? 0;
    var maxValue = displayMetadata[key].maxValue ?? 100;
    var buttons = displayMetadata[key].buttons ?? null;
    // Automatically capatalises the first letter of the key, should no title be provided.
    var title = displayMetadata[key].title ?? key.charAt(0).toUpperCase() + key.slice(1);
    var value = points[key] ?? 0;

    // Returns the data display component with all the metadata provided.
    return (
        <Box>
            {DataDisplay(title, value, prefix, suffix, minValue, maxValue, buttons)}
        </Box>
    );
}

function DataPanel({box, user}) {
    const [points, setPoints] = useState(null);

    useEffect(() => {
        if (box && box.boxId) { // Check if box and boxId are not null
            fetch(`http://localhost:2000/getEnvironmentDataPoint?boxId=${box.boxId}`)
                .then(res => res.json())
                .then((points) => {
                    setPoints(points);
                })
                .catch(error => console.error(error));
        } else {
            setPoints(null);
        }
    }, [box, user]);

    // Display time component.
    var last_updated = points ? points['time'] ?? "Loading..." : "Loading..."; 
    var last_updated_display = <Box>Loading...</Box>;;
    if(last_updated !== "Loading...") {
        var now = Date.now();

        //Create delta time to display how long ago the data was last updated.
        var delta = now - Date.parse(last_updated);

        //Automatically format days, minutes and hours
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

    //Finally, map the constituent data points when received from the React hook.
    var displays = !points ? <CircularProgress color="success"/> : Object.keys(points).map((key) => 
        <Box>
            {CreateDisplayComponent(key, points)}
        </Box>
    );

    return (
    <>
        {last_updated_display}
        {displays}
    </>);
}

export default DataPanel;
