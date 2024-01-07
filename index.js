const connectToMongo=require('./db');
const express = require('express')
require('dotenv').config();
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors());
app.use('/api/auth',require('./Routes/auth'));
connectToMongo();

app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.send({Message:"Hello Welcome To Instagram Clone",
           Website_name:"Social Media App",
});
})
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
})