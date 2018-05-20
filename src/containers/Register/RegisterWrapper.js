import React, { Component } from 'react';
import RegisterUser from './Register';
export class RegisterWrapperComponent extends Component {

    render() {
        return (
            <RegisterUser/>
        );
    }

}

const RegisterWrapper = RegisterWrapperComponent

export default RegisterWrapper;