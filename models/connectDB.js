const mongoose = require("mongoose");


const connectDB =  async () =>{
    try{
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    console.log("successfully connected to DB")
    } catch(error){
        console.log("error connecting DB", error);
    }
};

module.exports = connectDB;