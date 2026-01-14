//creating a express server
const express= require("express");
// const Authur = require("./middleware/auth")
const connectDB=require("./config/database");
// const revalidate=require("./scripts/revalidate");
const app=express();
const UserB =require("./models/user");
const {validateSignUpData}=require("./utils/validation");
app.use(express.json());



app.get("/info",async(req,res)=>{   
  const user=await UserB.find({});
  res.send(user);
});


app.post("/insert", async (req,res)=>{
  try{
    // console.log(req);
    await validateSignUpData(req);
    const{name,age,email,password}=req.body;
    const user=new UserB(req.body);
    console.log(req.body);
    await user.save();
    res.send("sucessfully added to db")
  }
  catch(err){
    if(err.code===11000){
        return res.status(400).json({
            message:"Email already exists"
        });
    }
    res.send(err.message);
  }
});


app.put("/update",async(req,res)=>{
    await UserB.findByIdAndUpdate({_id:"696774c907861e609b0569a3"},{$set:{name:"Pandey",age:"42"}})
    res.send("Updated sucessfully")
})

//delete all collection
app.delete("/delete",async(req,res)=>{
    await UserB.deleteMany({});
    res.send("deleted sucesscfully");
})
app.get("/",(req,res)=>{
    res.send("this is my first self made route");
});



connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3032, () => {
      console.log("server is listening on port 3032");
    });
  })
  .catch((err) => {
    console.log("Database can't be connected");
  });
