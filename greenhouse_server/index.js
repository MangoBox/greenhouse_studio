const express = require("express");
const app = express();
const mongoose = require("mongoose")

const enviromentDataModel = require("./models/enviromentData");
const userModel = require("./models/users");
const boxesModel = require("./models/boxes");

mongoose.connect(
    "mongodb+srv://server:greenhouse123@box-cluster.ceucbnf.mongodb.net/box-time-data?retryWrites=true&w=majority&appName=box-cluster"
);

app.get("/getBoxes", async (req, res) => {
    return boxesModel.find()
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((error)=>{
        res.status(500).json(error)    
  })
});

app.get("/getEnviromentData", async (req, res) => {
    return enviromentDataModel.find()
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((error)=>{
        res.status(500).json(error)    
  })
});

app.get("/getUsers", async (req, res) => {
    return userModel.find()
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((error)=>{
        res.status(500).json(error)    
  })
});

app.listen(3001, () => {
    console.log("SERVER STARTED");
})