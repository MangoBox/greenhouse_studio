import logo from './logo.svg';
import './App.css';
import * as React from 'react';

import Navbar from './Navbar';
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function App() {
  
  const [user, setUser] = useState(''); 
  const [userList, setUserLits] = useState([]); 

  const [box, setBox] = useState(''); 
  const [boxList, setBoxList] = useState([]); 

  const handleUserSelect = (event, user) => {
    console.log(user)
    setBox('')
    setUser(user);
  }

  const handleBoxSelect = (event, box) => {
    console.log(box)
    setBox(box);
  }
  
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

  useEffect(() => {
      fetch(`http://localhost:2000/getBoxes?userId=${user.userId}`)
      .then(res => res.json())
      .then((boxList) => {
        setBoxList(boxList);
        console.log(boxList);
      })
  }, [user]);
    
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h2'>Greenhouse Controller</Typography>

        <div style={{ display: 'flex' }}>
          User:<Select onChange={handleUserSelect} sx={{ width: 180 }}>
          {userList.map((user, key) => {
            return <Option key={user} value={user}>{user.name}</Option>
          })}
          </Select> 
        </div>
        <br></br>
        <div style={{ display: 'flex' }}>
          Greenhouse: <Select onChange={handleBoxSelect} sx={{ width: 180 }}>
            {boxList.map((box, key) => {
              return <Option key={box} value={box}>{box.boxId}</Option>
            })}
          </Select>
        </div>
        <br></br>
        <Navbar user={user} box={box}/>

      </header>
    </div>
  );
}

export default App; 
