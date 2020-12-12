const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();


const authMiddleware = (req, res, next) =>{
    const token = req.header("token");

    if(!token){
        return res.status(400).json({msg: "invalid token"});
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken)=>{
        console.log("decodedToken", decodedToken);
        if(err){
            return res.return(400).json({msg: "invalid token"});
        } else{
            //req.decodedUser = decodedToken.user
            next();
        }
    });
}

module.exports = authMiddleware;