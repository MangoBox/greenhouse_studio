const mongoose = require("mongoose");

const enviromentTimeDataSchema = new mongoose.Schema({
    "boxId": {
        type: Number,
        required: true,
    },
    "time" : { 
        type: Date,
        reqired: true,
    },
    "temperature" : { 
        type: Number,
        reqired: true,
    }
    // "humidity" : { 
    //     type: Number,
    //     reqired: true,
    // }
}, { collection: "enviromentTimeData"});


const enviromentTimeDataModel = mongoose.model("enviromentTimeData", enviromentTimeDataSchema);
module.exports = enviromentTimeDataModel;
