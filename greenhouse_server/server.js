const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose")

const enviromentTimeDataModel = require("./models/enviromentTimeData");
const userModel = require("./models/users");
const boxesModel = require("./models/boxes");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const path = require('path');
app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));

// get driver connection
//const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
 /* dbo.connectToServer(function (err) {
    if (err) console.error(err);
   }); */
  console.log(`Server is running on port: ${port}`);
});

app.use(express.static(path.join(__dirname, '../greenhouse_client/build')));

mongoose.connect(
  "mongodb+srv://server:greenhouse123@box-cluster.ceucbnf.mongodb.net/box-time-data?retryWrites=true&w=majority&appName=box-cluster"
);

app.get("/getBoxes", async (req, res) => {
  // Get the userid from the request body
  const { userId } = req.query;
  console.log(userId);
  // console.log("username: "+username);
  // Query the database for records with the given username
  return boxesModel.find({ userId : userId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

app.get("/getEnvironmentDataPoint", async (req, res) => {
  const { boxId } = req.query;
  console.log("getEnvironmentData, boxId: " + boxId)
  console.log(typeof(boxId))
  return enviromentTimeDataModel.findOne({boxId: boxId}).sort({ time: -1 })
  // return enviromentTimeDataModel.findOne().sort({ time: -1 })
  .then((result)=>{
    res.status(200).json(result);
    console.log(result);
  })
  .catch((error)=>{
    res.status(500).json(error)    
  })
});

app.get("/getEnvironmentData", async (req, res) => {
  const { boxId } = (req.query);
  // console.log("getEnvironmentData, boxId: " + boxId)
  return enviromentTimeDataModel.find({boxId: boxId}).sort({ time: -1 })
  .then((result)=>{
      res.status(200).json(result);
  })
  .catch((error)=>{
      res.status(500).json(error)    
  })
});

app.get("/getUsers", async (req, res) => {
  console.log("getUsers")
  return userModel.find()
  .then((result)=>{
      res.status(200).json(result);
  })
  .catch((error)=>{
      res.status(500).json(error)    
  })
});

app.get('/get', (req, res) => {
  res.send([
    { title: 'Humidity', suffix: '%', value: 50, prefix: ''},
    { title: 'Temperature', suffix: '°C', minValue: 0, maxValue: 50, value: 24.5, prefix: ''},
    { title: 'Atmospheric Pressure', suffix: 'hPa', minValue: 900, maxValue: 1100, value: 1013.89, prefix: ''},
    { title: 'Soil pH', suffix: '', value: 6.7, prefix: '', minValue: 2, maxValue: 12, buttons: [{name: 'Rebalance'}]},
    { title: 'Water Level', suffix: '%', value: 64, buttons: [{name: 'Drain'}]},
    { title: 'Vent', value: "Open", prefix: '', buttons: [{name: 'Open'}, {name: 'Close'}] },
    { title: 'Irrigation Pump', value: "Off", prefix: '', buttons: [{name: 'On'}, {name: 'Off'}] },
    { title: 'Lights', value: "Off", prefix: '', buttons: [{name: 'On'},{name: 'Dimmed'}, {name: 'Off'}] },
    { title: 'Humidity', suffix: '%', value: 10, prefix: ''},
    { title: 'Temperature', suffix: '°C', minValue: 0, maxValue: 50, value: 29.5, prefix: ''},
    { title: 'Atmospheric Pressure', suffix: 'hPa', minValue: 900, maxValue: 1100, value: 1100.89, prefix: ''},
    { title: 'Soil pH', suffix: '', value: 6.7, prefix: '', minValue: 2, maxValue: 12, buttons: [{name: 'Rebalance'}]},
    { title: 'Water Level', suffix: '%', value: 64, buttons: [{name: 'Drain'}]},
    { title: 'Vent', value: "Open", prefix: '', buttons: [{name: 'Open'}, {name: 'Close'}] },
    { title: 'Irrigation Pump', value: "Off", prefix: '', buttons: [{name: 'On'}, {name: 'Off'}] },
    { title: 'Lights', value: "Off", prefix: '', buttons: [{name: 'On'},{name: 'Dimmed'}, {name: 'Off'}] }
  ]);
})