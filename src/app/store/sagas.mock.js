import {
    take,
    put,
    select
} from 'redux-saga/effects';

import * as mutations from './mutations';
import uuid from 'uuid';

/**
 * Reducers cannot have any randomness (the must be deterministic)
 * Since the action of creating a task involves generating a random ID, it is not pure.
 * When the response to an action is not deterministic in a Redux application, both Sagas and Thunks are appropriate.
 */
export function* taskCreationSaga() {
    while (true) {
        const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerId = "U1";
        const taskId = uuid(); //Create a random unique Id

        yield put(mutations.createTask(taskId, groupId, ownerId));
        console.log("Got group Id", groupId);
    }
}