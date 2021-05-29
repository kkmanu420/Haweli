const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");

const session_secret = "newton";
let a={
    name:"suraj sinha",
    address:"maranpur",
    phone:7903177157
}
const app=express();
app.use(express.json())

  app.use(cors())
  
app.get('/signup',(req,res)=>{
//res.set('Access-Control-Allow-Origin', '*');
console.log("express started working")
res.send(a)
})
app.post('/login',(req,res)=>{
    res.set('Access-Control-Allow-Origin','*');
    const { name, password } = req.body;
    console.log(name);
    console.log(password)
    res.send(`Hello ${name}`)
    console.log(req.body)
    console.log(req.body.password)
})

app.listen(9999);