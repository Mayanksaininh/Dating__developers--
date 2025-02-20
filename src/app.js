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
