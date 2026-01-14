const mongoose = require("mongoose");
const AnkitKiSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        minlength:[3,"Name must be atleast 3 characters"]
    },
    age:{
        type:Number,
        required:true,
        min:[1,"Age must be greater than 0"],
        max:[60,"Age must be less than 61"],   
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        sparse:true,
        match:[/^\S+@\S+\.\S+$/,"InvalidEmail"],
    },
    password:{
        type:String,
        required:true,
        minlength:[10,"Password must be 8 characters long"],
        runValidators:true
    },
    active_status:{
        type:Boolean,
        default:false,
    }
    
},{timestamps:true}
)
const UserA= mongoose.model("Userfull", AnkitKiSchema);
module.exports =UserA;
