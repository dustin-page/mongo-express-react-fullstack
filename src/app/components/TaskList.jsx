import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({ name, id, tasks }) => (
    <React.Fragment>
        <h3>{name}</h3>
        <ul>
            {tasks.map(task => (<li key={task.id}>{task.name}</li>))}
        </ul>
    </React.Fragment>
)

function mapStateToProps(state, ownProps) {
    const groupId = ownProps.id;
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
}

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);