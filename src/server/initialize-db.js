import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initializeDB() {
    //Get the database connection by awaiting connectDB
    let db = await connectDB();

    for (let collectionName in defaultState) {
        let collection = db.collection(collectionName);

        //Pass insertMany an array and that array gets inserted into the database
        await collection.insertMany(defaultState[collectionName]);
    }
}

initializeDB();