const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    // This task will take arrays of object i.e. id of particular task from task.js and because of this user can see the tasks 
    tasks:[{
        type: Schema.Types.ObjectId,
        //This ref resembles reference i.e. of what model this task is talking about or from which model it has to take the object id
        ref: "Task",
    }]
});

module.exports = mongoose.model("User",userSchema);