const mongoose = require("mongoose");

const enviromentDataSchema = new mongoose.Schema({
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
    },
    "humidity" : { 
        type: Number,
        reqired: true,
    }
}, { collection: "enviromentData"});


const enviromentDataModel = mongoose.model("enviromentData", enviromentDataSchema);
module.exports = enviromentDataModel;
