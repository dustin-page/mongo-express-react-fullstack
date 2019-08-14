import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store';

import { Dashboard } from './components/Dashboard';

//console.log(store.getState());

ReactDOM.render(
    <Dashboard />,
    document.getElementById("app")
);