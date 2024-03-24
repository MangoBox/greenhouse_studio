import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';


export default function DataDisplay(title, value, prefix='', suffix='', minValue=0, maxValue=100, buttons=null) {

    if(!isNaN(value)) {
        if (value < minValue) {
            value = minValue;
        }
        if (value > maxValue) {
            value = maxValue;
        }
    }

    var scaledValue = 100 * (value - minValue) / (maxValue - minValue);


    
    var progressBar = !isNaN(value) ? <><br></br><LinearProgress color="success" value={scaledValue} determinate="true"/></> : '';

    var button_elements = !buttons ? '' : buttons.map((button) =>
        <Button color="success" >{button.name}</Button>
    );

    return (
        <Card>
            <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                    {/* {point ? <Typography variant="h6">{point.some}</Typography> : "Loading..."} */}
                    <Typography variant="h6">{title}</Typography>
                    <Box sx={{ flexGrow: 1 }}/>
                    {button_elements}
                    <Typography variant="h4">{prefix}{value}{suffix}</Typography>
                    
                </Stack>
               {progressBar}
            </CardContent>
        </Card>
    );
}