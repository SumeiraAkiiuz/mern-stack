const express = require("express");

const router = express.Router();

const AuthController = require("../controllers/AuthController")

//  routes for /api/auth

/**
 * @route       POST /api/auth/register
 * @description register endpoint
 * @access      Public
 */

 router.post("/register", AuthController.auth_register);

 /**
  * @route       POST /api/auth/login
  * @description login endpoint
  * @access      Private 
  */
 router.post("/login", AuthController.auth_login)

module.exports = router;