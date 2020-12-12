const express = require("express");

const router = express.Router();
const AuthRouter = require("./AuthRouter");

//only api endpoint

router.use("/auth", AuthRouter);


module.exports= router;