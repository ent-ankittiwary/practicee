const auth=(req,res,next)=>{
    console.log("Authorized");
    next();
}
module.exports={auth};