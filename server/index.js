

const express = require("express");
const coments = require("./data/coments");
const server = express();
//DB connection
const connectDB = require("./config/db")
require("dotenv").config();
connectDB()

const port = process.env.PORT ||5000


//first API`home APi`
server.get("/", (req, res) =>{
    res.send('home api')
})

server.get("/coments", (req, res) =>{
    res.json(coments);
})


//test endpoint by searching for data with _id
server.get("/coments/:id", (req, res) =>{
    const coment = coments.find((item) => item._id === +req.params.id);

    res.send(coment);
    
})

server.listen(port, () => console.log(`server run on port ${port}`));