const express = require('express');

const app = express();
const connectdb = require("./database")

// app.use('/', (req,res) => {
//     res.send("server is UP and running");
// })

connectdb.then(()=>{
    console.log("Database connection established...")
    app.listen(3000, ()=>{
        console.log("Server is successfully listening on port 3000")
    })
 })
 .catch(()=>{
   console.error("Database can't be connected")
 })


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

app.use("/use" , adminauth, (req,res) => {
    res.send("df");
})

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