const asyncHandler = require('express-async-handler');
const User = require('../models/userRegister')



//i wrapped the register with asyncHandler to handle all the errors that may occur in the app
const registerUser = asyncHandler( async (req, res) => {
    //here are what we requested from a user hwo want to register
    const {name, email, password, pic} = req.body;

    //if the user exists
    const userExsists = await User.findOne({email});

    //1_if there is somthing inside exsist
    if(userExsists){
        //1-2_ throw an ERROR
        res.status(400)
        throw new Error("user already exists");
    }

        //if it doesn't exsist then
        //create a new one
        const user = await User.create({
            name,
            email,
            password,
            pic,
        })

        //if it successfully created new one then send response back
        if (user){
            //these are the successfully response
            //we don't send the password as response
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                pic:user.pic,
            })
        }//else throw an Error
        else{
                res.status(400);
                throw new Error("something going wrong")
        }

    
});

module.exports= {registerUser}