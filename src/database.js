
require('dotenv').config();
const {MongoClient}  = require('mongodb');
const { $where } = require('./model/user');


const connectdb = async()=>{
  try{
    const uri  = process.env.mongodb+srv+"://${mayanksaininh}:mayanksaininh@myjourney.tntrf.mongodb.net/devTinder?retryWrites=true&w=majority"
    if(!uri){
      console.error('MONGODB_URI environment variable not found.');
      return;
    }
   await mongoose.connect("'mongodb+srv://mayanksaininh:mayanksaininh@myjourney.tntrf.mongodb.net/devTinder'")
   console.log('Connected to MongoDB')
}
catch(error){
  console.error('Error connecting to MongoDB:', error);
}
}

module.exprts = connectdb




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