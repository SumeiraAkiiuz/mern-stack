const express = require("express");

const router = express.Router();

const AuthController = require("../controllers/AuthController")

//  routes for /api/auth

/**
 * @route       POST /api/auth/register
 * @description register endpoint
 * @access      Public
 */

 router.post("/register", AuthController.authRegister);

 /**
  * @route       POST /api/auth/login
  * @description login endpoint
  * @access      Private 
  */
 router.post("/login", AuthController.authLogin)

module.exports = router;