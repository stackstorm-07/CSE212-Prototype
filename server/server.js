const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

let logs = [
 {user:"admin", action:"Added product", time:"10:20"},
 {user:"staff", action:"Updated stock", time:"10:25"},
 {user:"unknown", action:"Failed login", time:"10:30"}
];

app.get("/logs",(req,res)=>{
 res.json(logs);
});

app.post("/hash", async(req,res)=>{
 const password = req.body.password;

 const hash = await bcrypt.hash(password,10);

 res.json({hashedPassword:hash});
});

app.listen(5000,()=>{
 console.log("Server running on port 5000");
});