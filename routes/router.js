const express = require("express");

const router = express.Router();

//only api endpoint

router.get("/", (req, res)=>{
    console.log("API page");
    res.send("API page");
})


module.exports= router;