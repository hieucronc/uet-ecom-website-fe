import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignupPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/signup">
                    <SignUpPage/>
                </Route>
            </Switch>
        </Router>
    )
}
