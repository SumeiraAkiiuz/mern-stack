const express = require("express");
const {check} = require("express-validator");
const AuthController = require("../controllers/AuthController")

const router = express.Router();

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
  * @access      Public || Private 
  */
 router.post("/login", 
 [
     check("email", "please enter a valid email").isEmail(),
     check("password", "Please enter a password at least 6 characters")
 .isLength({
    min: 6,
    },
  ),
  
], 
    AuthController.authLogin
);

module.exports = router;