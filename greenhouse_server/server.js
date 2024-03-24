const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
//const dbo = require("./db/conn");


// Sample reply data


app.listen(port, () => {
  // perform a database connection when server starts
 /* dbo.connectToServer(function (err) {
    if (err) console.error(err);
   }); */
  console.log(`Server is running on port: ${port}`);
});

app.use(express.static(path.join(__dirname, '../greenhouse_client/build')));

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
  ]);
})