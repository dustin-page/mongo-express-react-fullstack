import React from 'react';
import { connect } from 'react-redux';

import { ConnectedTaskList } from './TaskList';

import styles from '../scss/Dashboard.module';

export const Dashboard = ({ groups }) => (
    <div>
        <h2>Dashboard</h2>
        <h3 className={styles.purpleColor}>Test</h3>
        {groups.map(group => (
            <ConnectedTaskList key={group.id} name={group.name} id={group.id} />
        ))}
    </div>
)

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);