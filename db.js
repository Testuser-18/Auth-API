const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_CLOUD_URI;
const connectToMongo = async () => {
  await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
      })
    .then(() => { 
        console.log("Database connected successfully");
    })
    .catch(err => {
        console.error(err);
    });
}
module.exports = connectToMongo;
