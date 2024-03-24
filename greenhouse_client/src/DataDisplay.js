import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import { useState, useEffect } from "react";


export default function DataDisplay(title, value, prefix='', suffix='') {
    var progressBar = !isNaN(value) ? <><br></br><LinearProgress color="success" value={value} determinate="true"/></> : '';

    return (
        <Card>
            <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                    {/* {point ? <Typography variant="h6">{point.some}</Typography> : "Loading..."} */}
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="h4">{prefix}{value}{suffix}</Typography>
                    
                </Stack>
               {progressBar}
            </CardContent>
        </Card>
    );
}