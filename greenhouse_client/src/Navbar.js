import * as React from "react";
 
// importing material UI components
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel'; 

import Container from '@mui/joy/Container';
import DataDisplay from "./DataDisplay";

export default function Navbar() {
    return (
        <Container sx={{ width: '100%' }}>
            <Tabs aria-label="Basic tabs" defaultValue={0} >
                <TabList tabFlex="auto">
                    <Tab color="success">Monitor</Tab>
                    <Tab color="success">Control</Tab>
                    <Tab color="success">Settings</Tab>
                </TabList>
                <TabPanel value={0}>
                    Monitoring Greenhouse Placeholder
                    {DataDisplay("Temperature", 23.4)}
                    {DataDisplay("Humidity", 65.4)}
                </TabPanel>
                <TabPanel value={1}>
                    <b>Second</b> tab panel
                </TabPanel>
                <TabPanel value={2}>
                    <b>Third</b> tab panel
                </TabPanel>
            </Tabs>
    </Container>
        
    );
}