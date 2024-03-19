import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

export default function DataDisplay(title, value) {
    return (
        <Card>
            <CardContent>
                <p>{title}</p>
                Current Value: {value}
            </CardContent>
        </Card>
    );
}