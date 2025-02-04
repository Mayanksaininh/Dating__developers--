const express = require('express');

const app = express();
app.use("/hello", ( req, res )=>{
    res.send("hello server")
})

app.use("/test", ( req, res )=>{
    res.send("hello form server")
})
app.listen(3000, ()=>{
    console.log("Server is succesfully listening on port 3000")
});
