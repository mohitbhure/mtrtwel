import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../../services/AuthService';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        var isAuthenticated = AuthService.isAuthenticated();
        return isAuthenticated ? <Component {...props}></Component> : <Redirect to={{ pathname: '/' }}></Redirect>
    }} ></Route>;
}
export default ProtectedRoute;