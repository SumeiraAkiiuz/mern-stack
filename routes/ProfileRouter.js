const express = require("express");
const router = express.Router();


/**
 * @route POST /api/profile
 * @description profile endpoint
 * @access Private
 */

 router.get("/",  (req, res)=>{
     res.send("private profile page")
 });

 module.exports = router;