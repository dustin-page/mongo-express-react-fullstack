import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; //body-parser allows us to handle POST requests
import { connectDB } from './connect-db'; //DB connector
import './initialize-db'; //Brings in the whole file without importing any methods or constants from it

let port = 7777;
let app = express();

app.listen(port, console.log("Server listening on port", port));

//Simple line of code to test the express server
//http://localhost:7777/test
app.get('/test', (req, res) => {
    res.send("Hello World!!!!");
});

//Add plugins to server
app.use(
    cors(), //cors() with no arguments creates lax cors requirements
    bodyParser.urlencoded({ extended: true }), //Enables POST requests
    bodyParser.json() //Enables POST requests
);

/***** MongoDB Update Methods *****/

//Separate function that communicates with the database
//This is because POST requests are hard to test
export const addNewTask = async task => {
    let db = await connectDB();
    let collection = db.collection('tasks');
    await collection.insertOne(task); //task could have any structure, including properties different than any previous task. This is a strength and weakness of mongoDB
}

export const updateTask = async task => {
    let { id, group, isComplete, name } = task; //Pass in the id with one or more properties you want to update on the task
    let db = await connectDB();
    let collection = db.collection('tasks');

    //if group is defined the user wants to change the group this task belongs to
    if (group) {
        //First argument is the property to match on. This finds the object with the matching property id. 
        //Second argument uses a special keyword called $set which means whatever object is passed as the set property will be changed in the record
        await collection.updateOne({ id }, { $set: { group } });
    }

    if (name) {
        await collection.updateOne({ id }, { $set: { name } });
    }

    if (isComplete !== undefined) {
        await collection.updateOne({ id }, { $set: { isComplete } });
    }
}

/***** Express Server Actions *****/

app.post('/task/new', async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send();
});

/* TODO: Implement error handling for when the id is not found */
app.post('/task/update', async (req, res) => {
    let task = req.body.task;
    await updateTask(task);
    res.status(200).send();
});



