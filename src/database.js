const {MongoClient}  = require('mongodb')

const url = 'mongodb+srv://mayanksaininh:<db_password>@myjourney.tntrf.mongodb.net/';
const client  = new MongoClient(url)

const dbName = 'Firstdb';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('MyFirst');
  
    // the following code examples can be pasted here...
  
    return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());