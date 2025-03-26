
require('dotenv').config();
// const mongoose = require('mongoose');
// const {MongoClient}  = require('mongodb');
// const { $where } = require('./model/user');

const { default: mongoose } = require("mongoose");


// const connectdb = async()=>{
  
//   //  await mongoose.connect("mongodb+srv://mayanksaininh:mayanksaininh@myjourney.tntrf.mongodb.net/devTinder")
//    await mongoose.connect('mongodb+srv://mayanksaininh:mayanksaininh@myjourney.tntrf.mongodb.net/devTinder');
//    console.log('Connected to MongoDB')
// }


// const connectDB = async () => {
//   try {
//       await mongoose.connect('mongodb+srv://mayanksaininh:mayanksaininh@myjourney.tntrf.mongodb.net/devTinder', {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//       });
//       console.log('MongoDB connected successfully');
//   } catch (error) {
//       console.error('MongoDB connection error:', error);
//       process.exit(1); // Exit process with failure
//   }
// };

// connectDB();
// module.exprts = connectDB;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
   const con = await mongoose.connect(uri, clientOptions);
      await mongoose.connection.db.admin().command({ ping: 1 });
      console.log(`MongoDB Connected: ${con.connection.host}`);
   
    } catch (error) {
      console.error(`Error: ${error.message}`.red.bold);
      process.exit(1); // Exit with a non-zero status code to indicate an error
    }

  };

  module.exports = connectDB;


// const url = 'mongodb+srv://mayanksaininh:mayanksaininh@myjourney.tntrf.mongodb.net/devTinder';
// // it is basically connect to the cluster
// const client  = new MongoClient(url)

// const dbName = 'Firstdb';

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('MyFirst');
  
//     // the following code examples can be pasted here...
  
//     return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());