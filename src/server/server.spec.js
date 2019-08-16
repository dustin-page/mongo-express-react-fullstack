import { addNewTask, updateTask } from './server';

(async function myFunc() {
    //Test inserting a new task into the DB
    await addNewTask({
        name: "My task",
        id: "12346"
    });

    //Test updating a task
    await updateTask({
        name: "My task - UPDATED!!!",
        id: "12346"
    });
})();
