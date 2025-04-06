const express = require('express');

const app = express();

const user = require("./model/user")
// const connectDb = require('./database');
// for add user into the database
const connectDB = require('./database');
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json())

app.post("/signup" , async(req, res) =>{ 

    const user = new user (req.body);

// creating a new instance of the user model
//     const user = new user( {
//         firstName : 'Mayank',
//         lastName : 'saini',
//         email : 'mayank@saini.com',
//         password : 'mayank@123',
//     })

   try {await user.save() 
   res.send("User added successfully")
   }
   catch(error){
    res.status(400).send("user is not added");
   }
})
// feed api to get all data from database
app.get("/feed", async(req,res)=>{
    try{
        const users = await user.find({})
        // if we leave this is empty then it will send the all users back 
        res.send(users)
    }
    catch(error){
        res.status(400).send("something went wrong")
    }

})
// this api is to one user from database
app.get("/user", async(req,res)=>{
    const userid = req.body.emailID

    try{
       const user =  await user.find({emailID : userid})
       res.send(user)
    }
    catch(error){
        res.status(400).send("something went wrong")
    }
})



connectDB()
.then(()=>{
    console.log("Database connection established...")
    app.listen(3000, ()=>{
        console.log("Server is successfully listening on port 3000")
    })
 })
 .catch(()=>{
   console.error("Database can't be connected")
 })

