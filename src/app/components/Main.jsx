import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import { store } from '../store';
import { history } from '../store/history'

import { ConnectedNavigation } from './Navigation';

import { ConnectedDashboard } from './Dashboard';
import { ConnectTaskDetailed } from './TaskDetail';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                {/* <ConnectedDashboard /> */}
                <Route
                    exact
                    path="/dashboard"
                    render={() => (<ConnectedDashboard />)}
                />
                <Route
                    exact
                    path="/task/:id"
                    render={({ match }) => (<ConnectTaskDetailed match={match} />)}
                />
            </div>
        </Provider>
    </Router>
)