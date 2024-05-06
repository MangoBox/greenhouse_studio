const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://server:greenhouse123@box-cluster.ceucbnf.mongodb.net/box-time-data?retryWrites=true&w=majority&appName=box-cluster'; // Replace with your MongoDB URI

// Database Name
const dbName = 'box-time-data'; // Replace with your database name

// Collection Name
const collectionName = 'enviromentTimeData'; // Replace with your collection name

// Function to generate natural temperature data
function generateTemperatureData() {
    // Get current timestamp
    const now = new Date();
    // Calculate time of the day in milliseconds
    const timeOfDayMs = now.getHours() * 3600000 + now.getMinutes() * 60000 + now.getSeconds() * 1000;
    // Calculate angle for sinusoidal curve based on time of the day
    const angle = (2 * Math.PI * timeOfDayMs) / 86400000; // 86400000 milliseconds in a day
    // Generate temperature using sinusoidal curve with added noise
    const baseTemperature = 30; // Average temperature for the day
    const amplitude = 10; // Amplitude of temperature variation
    const noise = Math.random() * 3 - 1.5; // Random noise [-1.5, 1.5]
    const temperature = baseTemperature + amplitude * Math.sin(angle) + noise;
    return temperature;
}

// Function to connect to MongoDB and insert temperature data
async function insertTemperatureData() {
    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Generate and insert temperature data for the last week
        const temperatureData = [];
        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
        for (let timestamp = oneWeekAgo; timestamp < now; timestamp.setMinutes(timestamp.getMinutes() + 10)) {
            temperatureData.push({
                _id: new ObjectId(),
                time: new Date(timestamp),
                temperature: generateTemperatureData(),
                boxId: "1"
            });
        }

        //await collection.updateMany({}, { $set: {boxId: { $toString: "$boxId" }}});
        console.log(temperatureData);

        await collection.insertMany(temperatureData);
        //console.log('Temperature data inserted successfully');
    } catch (err) {
        console.error('Error inserting temperature data:', err);
    } finally {
        // Close the connection
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

// Call the function to insert temperature data
insertTemperatureData();
