const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    emialID : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : Number
    },
    gender : {
        type : String
    }
})
 
const usermodel = mongoose.model("User" ,userSchema) 
module.exports = usermodel