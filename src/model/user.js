const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minlength :  4,
    },
    lastName : {
        type : String
    },
    emialID : {
        type : String,
        required :true,
        unique : true,
        lowercase : true,
        trim : true,
        // trim means there will be no white space in any mailID
    },
    password : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        min : 16,
    },
    gender : {
        type : String,
        // adding a validate function
        validate(value){
            if(!["male", "female", "other"]){
                throw new console.error("Gemder is not valid");
            }
        },
    },
    about:{
        type : string,
        default : "This is the default about the user",
    },
    skills :{
        type : [String],
        required : true
    },
    photoUrl :{
        type : String,
        default : "https://www.vecteezy.com/free-vector/default-profile-picture",
    }
},
{
    // mongodb now collect the time, when the user is registered by default it will added
    timestamps : true,
})
 
const usermodel = mongoose.model("User" ,userSchema) 
module.exports = usermodel