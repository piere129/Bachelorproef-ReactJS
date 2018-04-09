import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Parent from './containers/parent/parent'
import Header from './containers/header/header'
import Home from './containers/home/home';
import Counter from './containers/counter/counter';
import NestParent from './containers/nestParent/nestParent';
import NestChild, { Nesting } from './containers/nestChild/nestChild';

class AppRouteComponent extends Component {
    render() {
        return (
                <Router>
                <Switch>
                    <Parent>
                        <Switch>
                        <Route exact path="/" component={Counter} />
                        <Route path="/test" component={NestParent}/>
                        </Switch>
                    </Parent>
                </Switch>
                </Router>
        );
    }
}

AppRouteComponent.propTypes = {

};

const Routes = connect(({ }) => ({ }))(AppRouteComponent);

export default Routes;
