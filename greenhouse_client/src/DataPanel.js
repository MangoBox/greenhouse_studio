import * as React from "react";
import { useState, useEffect } from "react";
import DataDisplay from "./DataDisplay";
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

function DataPanel() {
    const [points, setPoints] = useState(null);

    useEffect(() => {
    fetch('/get')
        .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error))
        .then((points) => {
            setPoints(points);
        }).then(data => console.log(data));
    }, []);

    

    var displays = !points ? <CircularProgress color="success"/> : points.map((point) => 
            <Box>
                {DataDisplay(point.title, point.value, point.prefix, point.suffix, point.minValue, point.maxValue, point.buttons)}
            </Box>
    );

    return (
    <>
        {displays}
    </>);
}

export default DataPanel;