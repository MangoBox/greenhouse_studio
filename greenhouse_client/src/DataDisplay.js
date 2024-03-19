import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';


export default function DataDisplay(title, value, prefix="", suffix="") {
    return (
        <Card>
            <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="h4">{prefix}{value}{suffix}</Typography>
                    
                </Stack>
                <br></br>
                <LinearProgress color="success" value={value} determinate="true"/>
            </CardContent>
        </Card>
    );
}