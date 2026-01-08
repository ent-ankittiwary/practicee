//setting up my server

const express= require("express");
const app=express();

app.use((req,res)=>{
    res.send("Hello ,I am your new assistant");
})
const port=3032;
app.listen(`${port}`,()=>{
    console.log("server is listening on port "+port);
})