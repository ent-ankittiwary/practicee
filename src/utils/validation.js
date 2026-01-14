const validator=require('validator');
const validateSignUpData=(req)=>{
    const {name,age,email,password}=req.body;
    if(!name || ! age || !email || !password){
        throw new Error("Missing some feilds");
    }
    // if(name.length<3){
    //     throw new Error("name must be atleast 3 characters");
    // }
    if(age<18){
        throw new Error("Age must be greater than 18");
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("Please enter an strong password")
    }
}
module.exports={validateSignUpData};