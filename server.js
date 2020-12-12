const express = require("express");

const app = express();

const router = require("./routes/router");

app.use("/api", router);



app.listen(3000, ()=>{
    console.log("i am listening on port 3000");
});