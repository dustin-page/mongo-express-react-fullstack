import {addNewTask} from './server';

//Test inserting a new task into the DB
addNewTask({
    name: "My task",
    id: "12345"
});