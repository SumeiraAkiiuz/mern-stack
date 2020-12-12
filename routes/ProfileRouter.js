const express = require("express");
var jwt = require("jsonwebtoken");
const router = express.Router();
const authMiddleware = (req, res, next)=>{

    const token = req.header("token");

/**
 * @route POST /api/profile
 * @description profile endpoint
 * @access Private
 */

 router.get("/", auth, (req, res)=>{
     res.send(req.decodedUser)
 });

}; 

 module.exports = router;