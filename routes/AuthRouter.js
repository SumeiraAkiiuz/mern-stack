const express = require("express");
const {check, validationResult} = require("express-validator");

const router = express.Router();

const AuthController = require("../controllers/AuthController")

//  routes for /api/auth

/**
 * @route       POST /api/auth/register
 * @description register endpoint
 * @access      Public
 */

 router.post("/register", [check("password", "Please enter a password at least 6 characters")
 .isLength({
    min: 6,
    },
  ),
  check("email", "please enter a valid email").isEmail(),
], 
    AuthController.authRegister
);

 /**
  * @route       POST /api/auth/login
  * @description login endpoint
  * @access      Private 
  */
 router.post("/login", AuthController.authLogin)

module.exports = router;