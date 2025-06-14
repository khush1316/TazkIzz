const User = require('../models/user');
const bcrypt = require('bcryptjs');

const register = async(req,res) =>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(404).json({error:"All fields are required"});
        }
        if(username.length<5){
            return res.status(404).json({error: "Username should have 5 characters"});
        }
        if(password.length<6){
            return res.status(404).json({error: "Password length should be greater than 6"});
        }

        const userCheck = await User.findOne({$or : [{username},{email}]});
        if(userCheck){
            return res.status(404).json({error:"Username or email already exits..."});
        }else{
            const hashPass = await bcrypt.hash(password,10);
            const newUser = new User({username,email,password: hashPass});
            await newUser.save();
            return res.status(200).json({success:"Registered Successfully"});
        }

         
    } catch (error) {
        return res.status(404).json({error: "Internal Server Error"});
    }
};

module.exports = {register};