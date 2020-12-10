const express = require("express");

const router = express.Router();


router.get("/", (req, res)=>{
    console.log("Home page");
    res.send("home page");
})

router.get("/api", (req, res)=>{
    console.log("api page");
    res.send("api page");
})


module.exports= router;