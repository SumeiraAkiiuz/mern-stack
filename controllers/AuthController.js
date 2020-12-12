const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

exports.authRegister = async (req, res)=>{
    //TODO: Register function.

    const {firstName, lastName, email, password} = req.body;

    //TODO1: validate the fields
    //TODO2: check already registered

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    const user = new User ({
        firstName,
        lastName,
        email,
        password: newPassword, //cryped password
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