import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Tester from './containers/test/test'

class AppRouteComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Tester} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

AppRouteComponent.propTypes = {

};

const Routes = connect(({ }) => ({ }))(AppRouteComponent);

export default Routes;
