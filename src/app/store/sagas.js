import { take, put, select } from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';

//Define URL to use to communicate to the server
const url = "http://localhost:7777";

export function* taskCreationSaga() {
    while (true) {
        const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerId = "U1";
        const taskId = uuid(); //Create a random unique Id

        yield put(mutations.createTask(taskId, groupId, ownerId));

        const { res } = yield axios.post(`${url}/task/new`, {
            task: {
                id: taskId,
                group: groupId,
                owner: ownerId,
                isComplete: false,
                name: "New task"
            }
        });
    }
}

export function* taskModificationSaga() {
    while (true) {
        //If any of these actions are dispatched the next line of code will run
        //These actions are already being sent to the reducer so this saga is going to inform the server of the change.
        const task = yield take([
            mutations.SET_TASK_NAME, 
            mutations.SET_TASK_GROUP, 
            mutations.SET_TASK_COMPLETE
        ]);

        axios.post(`${url}/task/update`, {
            task: {
                id: task.taskId,
                group: task.groupId,
                name: task.name,
                isComplete: task.isComplete
            }
        })
    }
}