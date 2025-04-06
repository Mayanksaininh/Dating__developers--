
require('dotenv').config();
// const mongoose = require('mongoose');
// const {MongoClient}  = require('mongodb');
// const { $where } = require('./model/user');

const { default: mongoose } = require("mongoose");



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
