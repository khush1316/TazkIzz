const express = require('express');
require('dotenv').config();
const cors = require('cors');
require("./connection/connect");

const userApi = require('./controller/user');

const app = express();

//To tell out backend that we are using the json format
app.use(express.json());

//For the connectivity of frontend with the backend
app.use(cors());

app.use("/api/v1/",userApi);

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });

app.listen(process.env.PORT,()=>{
    console.log("Server Started");
});