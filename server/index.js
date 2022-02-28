const express = require("express");
const comments = require("./data/comments");
const server = express();

//importing userRoutes
const userRoutes = require("./routes/userRoutes")
//DB connection
const connectDB = require("./config/db");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
require("dotenv").config();
connectDB()
server.use(express.json())

const port = process.env.PORT ||5000


//first API`home APi`
server.get("/", (req, res) =>{
    res.send('home api')
})

server.get("/comments", (req, res) =>{
    res.json(comments);
})


//test endpoint by searching for data with _id
server.get("/comments/:id", (req, res) =>{
    const comment = comments.find((item) => item._id === +req.params.id);

    res.send(comment);
    
})

//end point for userLogReg page
server.use('/user',userRoutes);

//calling the notFound middleware function from error handler
server.use(notFound);
//calling the errorHandler middleware function from error handler
server.use(errorHandler)

server.listen(port, () => console.log(`server run on port ${port}`));