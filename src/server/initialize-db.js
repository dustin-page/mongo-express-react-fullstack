import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initializeDB() {
    //Get the database connection by awaiting connectDB
    let db = await connectDB();
    //Find the default user
    let user = await db.collection('users').findOne({id:"U1"});
    //If there's no user then run this db initialization logic
    if(!user) {
        for (let collectionName in defaultState) {
            let collection = db.collection(collectionName);
    
            //Pass insertMany an array and that array gets inserted into the database
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

initializeDB();