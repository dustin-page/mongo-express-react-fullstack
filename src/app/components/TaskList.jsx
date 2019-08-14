import React from 'react';
import { connect } from 'react-redux';

import {requestTaskCreation} from '../store/mutations';

export const TaskList = ({ name, id, tasks, createNewTask }) => (
    <React.Fragment>
        <h3>{name}</h3>
        <ul>
            {tasks.map(task => (<li key={task.id}>{task.name}</li>))}
        </ul>
        <button onClick={()=>createNewTask(id)}>Add New</button>
    </React.Fragment>
)

const mapStateToProps = (state, ownProps) => {
    const groupId = ownProps.id;
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => { //mapDispatchToProps gives our component access to functions
    return {
        createNewTask(id) {
            console.log("Creating a new task...", id);
            dispatch(requestTaskCreation(id));
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);