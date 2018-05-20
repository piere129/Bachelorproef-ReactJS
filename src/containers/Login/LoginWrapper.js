import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/auth.actions';
import LoginUser from './Login';

export class LoginWrapperComponent extends Component {

    submitLogin = values => {
        this.props.login(values);
    };

    render() {
        return (
            <LoginUser onSubmit={this.submitLogin}/>
        );
    }

};

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {
        login
    };
}

const LoginWrapper = connect(
    mapStateToProps,
    mapDispatchToProps()
)(LoginWrapperComponent);

export default LoginWrapper;