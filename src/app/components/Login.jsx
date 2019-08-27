import React from 'react';
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';

import bunny from '../images/bunny';

const Login = ({ authenticateUser, authenticated }) => (
    <div>
        <h2>Please login</h2>
        <img src={bunny} alt="buny picture" width="200" />
        <form action="" onSubmit={authenticateUser}>
            <input type="text" placeholder="username" name="username" defaultValue="Dev" />
            <input type="password" placeholder="password" name="password" defaultValue="" />
            {authenticated === mutations.NOT_AUTHENTICATED ? <p>Login incorrect</p> : null}
            <button type="submit">Login</button>
            <p>Password: TUPLES</p>
        </form>
    </div>
);

const mapStateToProps = ({ session }) => ({
    authenticated: session.authenticated
})

const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e) {
        e.preventDefault();
        let username = e.target['username'].value
        let password = e.target['password'].value
        dispatch(mutations.requestAuthenticateUser(username, password));
    }
})

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);