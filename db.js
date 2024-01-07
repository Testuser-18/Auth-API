const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_CLOUD_URI;
const connectToMongo = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
        bufferCommands: false, // Disable command buffering
        bufferTimeoutMS: 15000, // Set timeout to 30 seconds (default is 30 seconds)
      })
    .then(() => { 
        console.log("Database connected successfully");
    })
    .catch(err => {
        console.error(err);
    });
}
module.exports = connectToMongo;
