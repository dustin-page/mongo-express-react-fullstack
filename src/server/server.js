import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; //body-parser allows us to handle POST requests
import { connectDB } from './connect-db'; //DB connector

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

//Separate function that communicates with the database
//This is because POST requests are hard to test
export const addNewTask = async task => {
    let db = await connectDB();
    let collection = db.collection('tasks');
    await collection.insertOne(task); //task could have any structure, including properties different than any previous task. This is a strength and weakness of mongoDB
}


app.post('/task/new', async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send();
});



