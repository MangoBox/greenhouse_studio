import * as React from "react";
 
// importing material UI components
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel'; 
import Box from '@mui/joy/Box';

import Container from '@mui/joy/Container';
import DataDisplay from "./DataDisplay";

export default function Navbar() {
    return (
        <Box sx={{ width: '100%' }} >
            <Tabs aria-label="Basic tabs" defaultValue={0} >
                <TabList tabFlex="auto">
                    <Tab color="success">Monitor</Tab>
                    <Tab color="success">Control</Tab>
                    <Tab color="success">Settings</Tab>
                </TabList>
                <TabPanel value={0}>
                    Last updated 08:32
                    <>
                        <DataDisplay title="Temperature" value={23.4} suffix="°C"/>
                        <DataDisplay title="Humidity" value={65.4} suffix="%"/>
                        <DataDisplay title="Vent Status" value="Open"/>
                    </>
                    
                </TabPanel>
                <TabPanel value={1}>
                    <b>Second</b> tab panel
                </TabPanel>
                <TabPanel value={2}>
                    <b>Third</b> tab panel
                </TabPanel>
            </Tabs>
    </Box>
        
    );
}