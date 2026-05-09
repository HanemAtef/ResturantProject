const bcrypt = require("bcryptjs");
const mongoose=require ("mongoose");

const userschema= new mongoose.Schema({
    name:{
        type:String,   
        required:true ,
         trim: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [50, "Username cannot exceed 50 characters"]
            
    },
    email:{
        type:String,        
        required:true,
        unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    password:{
        type:String,        
        required:true,
        trim : true,
        minlength: [6, "Password must be at least 6 characters"],
        maxlength: [100, "Password cannot exceed 100 characters"]
    },  
   phone:{
        type:String,
        required:true,
        trim: true,
        match: [/^\d{11}$/, "Please enter a valid 11-digit phone number"]
   },
     role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    address:{
        type:String,
        required:true,
       
    }
},{timestamps:true})


userschema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

const User= mongoose.model("User",userschema);
module.exports=User;
