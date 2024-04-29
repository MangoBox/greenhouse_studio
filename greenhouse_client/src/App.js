import logo from './logo.svg';
import './App.css';
import * as React from 'react';

import Navbar from './Navbar';
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function App() {
  
  const [user, setUser] = useState('user1'); 
  const [userList, setUserLits] = useState([]); 
  
  useEffect(() => {
    fetch('http://localhost:2000/getUsers')
        .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error))
        .then((userList) => {
          setUserLits(userList);
          console.log(userList);
        }).then(data => console.log(data));
    }, []);
    
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h2'>Greenhouse Controller</Typography>


        <Select defaultValue={user}>
          {userList.map((user) => {
            return <Option value={user.username}>{user.name}</Option>
          })}
        </Select>
        <br/>
        <Navbar/>

      </header>
    </div>
  );
}


export default App; 
