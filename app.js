const express=require("express")
const app=express()
const port=process.env.port || 2000
app.get("/",(req,res)=>{
    res.send("hello shihab vai 💕😁🙌😉😎.how are you")
});
app.listen(port)