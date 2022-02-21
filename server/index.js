

const express = require("express");
const coments = require("./data/coments");
const server = express();

//importing userRoutes
const userRoutes = require("./routes/userRoutes")
//DB connection
const connectDB = require("./config/db")
require("dotenv").config();
connectDB()
server.use(express.json())

const port = process.env.PORT ||5000


//first API`home APi`
server.get("/", (req, res) =>{
    res.send('home/api')
})

server.get("/coments", (req, res) =>{
    res.json(coments);
})


//test endpoint by searching for data with _id
server.get("/coments/:id", (req, res) =>{
    const coment = coments.find((item) => item._id === +req.params.id);

    res.send(coment);
    
})

//end point for userLogReg page
server.use('/user',userRoutes);

server.listen(port, () => console.log(`server run on port ${port}`));