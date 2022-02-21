const registerUser = async (req, res) => {

    //here are what we requested from a user hwo want to register
    const {name, email, password, pic} = req.body;

    res.json({
        name,
        email,
    })
}

module.exports= {registerUser}