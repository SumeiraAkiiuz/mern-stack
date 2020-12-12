const User = require("../models/UserModel");

exports.authRegister = async (req, res)=>{
    //TODO: Register function.

    const {firstName, lastName, email, password} = req.body;

    //TODO1: validate the fields
    //TODO2: check already registered
    //TODO3: crypt password
    //TODO4: save the user to DB

    const user = new User ({
        firstName,
        lastName,
        email,
        password, //cryped password
    });

    await user.save();

    //TODO: error handling for saving
    res.send("Register Completed");
};

exports.authLogin = (req, res) =>{
    //TODO: Auth
    //TODO: Login func
    res.send("Login was successful");
}; 