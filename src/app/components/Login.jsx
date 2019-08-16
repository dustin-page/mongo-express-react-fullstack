import React from 'react';
import { connect } from 'react-redux';


const Login = () => (
    <div>
        <h2>Please login</h2>
        <form action="">
            <input type="text" placeholder="username" name="username" defaultValue="Dev" />
            <input type="password" placeholder="password" name="password" defaultValue="" />
            <button type="submit">Login</button>
        </form>
    </div>
);

const mapStateToProps = state => state;

export const ConnectedLogin = connect(mapStateToProps)(Login);