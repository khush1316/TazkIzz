const mongoose = require("mongoose");

const connect = async()=> {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database Connected");
    } catch (error) {
        console.log("Not connected");
        
    }
};

connect();