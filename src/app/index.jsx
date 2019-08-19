import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';

import './scss/app.scss';

import { store } from './store';

import { Main } from './components/Main';

//console.log(store.getState());

ReactDOM.render(
    <Main />,
    document.getElementById("app")
);