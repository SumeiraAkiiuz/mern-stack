const express = require("express");

const router = express.Router();
const AuthRouter = require("./AuthRouter");
const ProfileRouter = require("./ProfileRouter")
const BookRouter = require("./BookRouter")


//only /api endpoint

/**
 * @route /api/auth
 * @description Route for auth
 */

router.use("/auth", AuthRouter);

/**
 * @route /api/profile
 * @description Route for profile
 */

 router.use("/profile", ProfileRouter);

 /**
 * @route /api/book
 * @description Route for book
 */

 router.use("/book", BookRouter)

module.exports= router;