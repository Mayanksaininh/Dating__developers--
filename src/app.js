const express = require('express');

const app = express();

// app.use('/', (req,res) => {
//     res.send("server is UP and running");
// })
app.use("/hello", ( req, res )=>{
    res.send("hello server");
})

app.use("/ab?c", ( req, res )=>{
    res.send("hello form server")
})

app.use("/ab+c", ( req, res )=>{
    res.send("hello server")
})

app.use("/ab*c", ( req, res )=>{
    res.send("hello form server")
})


app.get("/user" , (req,res,next) =>{
    // res.send({firstname : "mayank" , lastname : "saini"})
    next();
},
(req,res)=>{
    res.send("ush");
    // res.send("welding");
}
)

app.post("/user" , (req,res) =>{
    res.send("saved in DB succesfully")
})

app.delete("/user", (req,res) =>{
    res.send("user is deleted ")
})
const {adminauth}  = require("./middleware/auth")

app.listen(3000, ()=>{
    console.log("Server is succesfully listening on port 3000")
}); 
app.use("/use" , adminauth)

app.get("/admin/data", (req,res) => {
    res.send("Get all data")
})

app.delete("/admin/deleteuser", (req,res) => {
     // check the request is authenticated, if it is actually from the admin side
     res.send("detele user")
})

app.get("/" , (err,req,res,next) =>{
    if(err){
        res.status(500).send("Something went worng")
    }
})