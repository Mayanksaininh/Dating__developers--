const mongoose = require('mongoose')

const connectdb  = async() =>{
    await mongoose.connect("mongodb+srv://mayanksaininh:mayanksaininh@myjourney.tntrf.mongodb.net/")
    // this is reffering to the cluster not to the database  
}
// this async function return us the promise

connectdb().then(()=>{
    console.log("database connection established....")
}).catch((err) =>{
    console.error("database cannot be established....")
})