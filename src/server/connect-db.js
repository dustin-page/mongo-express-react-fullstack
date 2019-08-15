import { MongoClient } from 'mongodb';

//dev url; production url will be different
//add a db collection name called "myorganizer". This can be called anything.
const url = `mongodb://localhost:27017/myorganizer`;

//variable that represents the database connection. this is so we don't have to reconnect every time we want to use it.
//we can just re-use this existing connection
let db = null;

//the connection function
export async function connectDB() {

    //cache the db if it exists
    if (db) return db;

    //create the db
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    console.info("Got DB", db);
    return db;
}