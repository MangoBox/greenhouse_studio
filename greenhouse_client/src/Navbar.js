import * as React from "react";
 
// importing material UI components
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel'; 
import Box from '@mui/joy/Box';
import HomePage from "./HomePage";
import DataPanel from "./DataPanel";
import DetailedDisplay from "./DetailedDisplay";

export default function Navbar() {
    return (
        <Box sx={{ width: '100%' }} >
            <Tabs aria-label="Basic tabs" defaultValue={0} >
                <TabList tabFlex="auto">
                    <Tab color="success">Home</Tab>
                    <Tab color="success">Dashboard</Tab>
                    <Tab color="success">Monitor</Tab>
                    <Tab color="success">Settings</Tab>
                </TabList>
                <TabPanel value ={0}>
                    <HomePage/>
                </TabPanel>
                <TabPanel value={1}>
                    <DataPanel/>
                    <b>Second</b> tab panel
                </TabPanel>
                <TabPanel value={2}>
                    <b>Second</b> tab panel
                    <DetailedDisplay/>
                </TabPanel>
                <TabPanel value={3}>
                    <b>Third</b> tab panel
                </TabPanel>

            </Tabs>
        </Box>
    );
}
