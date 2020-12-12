const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const {validationResult}=require("express-validator");
var jwt = require("jsonwebtoken");
//const {check, validationResult} = require("express-validator");

const { response } = require("express");

exports.authRegister = async (req, res)=>{
    const {firstName, lastName, email, password} = req.body;

    const validationErr = validationResult(req);
    
    if(validationErr?.errors?.length > 0){
        return res.status(400).json({errors: validationErr.array()});
    }

    const userData = await User.findOne({email});
    if(userData){
       return res
       .status(400)
       .json({errors: [{massege: "User already exists!"}]})
    }

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    const user = new User ({
        firstName,
        lastName,
        email,
        password: newPassword, //cryped password
    });

    await user.save();
    res.send("Register Completed");
};

exports.authLogin = async (req, res) =>{
        const {email, password} = req.body;
    
        const validationErr = validationResult(req);
        
        if(validationErr?.errors?.length > 0){
            return res.status(400).json({errors: validationErr.array()});
        }


        //user exist check
        const userData = await User.findOne({email});
        if(!userData){
           return res
           .status(400)
           .json({errors: [{massege: "User does not exists!"}]})
        }


        //password compare
        const isPasswordMatch = await bcrypt.compare(password, userData.password);
        if(!isPasswordMatch){
            return res
            .status(400)
            .json({errors: [{messege: "invalid credentials"}]
        });
        }

        //JWT WEB TOKEN - JWT
        jwt.sign(
            {userData}, 
            process.env.JWT_SECRET_KEY, 
            {expiresIn: 3600},
            (err, token)=>{
            if(err){
                return res
                .status(400)
                .json({errors: [{messege: "unknown error"}] });
            }
            res.send(token);
        }    
    ); 
}; 