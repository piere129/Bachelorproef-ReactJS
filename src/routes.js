import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './containers/Home/Home';
import Parent from './containers/Parent/Parent';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import RegisterWrapper from './containers/Register/RegisterWrapper';
import LoginWrapper from './containers/Login/LoginWrapper';
import Benchmark from "./containers/Benchmark/Benchmark";

export const history = createBrowserHistory();

class AppRouteComponent extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Parent>
                        <Switch>
                            <Redirect exact from="/" to="/login"/>
                            <Route exact path="/login" component={LoginWrapper}/>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/register" component={RegisterWrapper}/>
                            <Route exact path="/benchmark" component={Benchmark}/>
                            <Route path="/*" component={NotFoundPage}/>
                        </Switch>
                    </Parent>
                </Switch>
            </Router>
        );
    }
}

AppRouteComponent.propTypes = {};

export default AppRouteComponent;