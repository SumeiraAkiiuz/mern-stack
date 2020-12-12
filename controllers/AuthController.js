exports.authRegister = (req, res)=>{
    //TODO: Register function.

    const {firstName, lastName, email, password} = req.body;
    console.log(
        "Fields: ",
        firstName,
        lastName,
        email,
        password
    );
    //TODO1: validate the fields
    //TODO2: check already registered
    //TODO3: crypt password
    //TODO4: save the user to DB


    res.send("Register Completed");
};

exports.authLogin = (req, res) =>{
    //TODO: Auth
    //TODO: Login func
    res.send("Login was successful");
}; 