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
    res.send("welding");
}
)

app.post("/user" , (req,res) =>{
    res.send("saved in DB succesfully")
})

app.delete("/user", (req,res) =>{
    res.send("user is deleted ")
})

app.listen(3000, ()=>{
    console.log("Server is succesfully listening on port 3000")
}); 
app.get("/admin/getalldata" , (req,res) => {

    // check the request is authenticated, if it is actually from the admin side
    const token = "xyz"
    const isadminAuthorized = token ==="xyz"
    if(isadminAuthorized){
        res.send("All data sent")
    }
    else{
        res.status(401).send("unauthorized data")
    }
    // res.send("Get all data")

})

app.delete("/admin/deleteuser", (req,res) => {
     // check the request is authenticated, if it is actually from the admin side
     const token = "xyz"
     const isadminAuthorized = token ==="xyz"
     if(isadminAuthorized){
         res.send("All data delete")
     }
     else{
         res.status(404).send("unauthorized data")
     }
})