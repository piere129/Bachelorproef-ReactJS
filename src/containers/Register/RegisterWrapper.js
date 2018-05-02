import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterUser from './Register';

export class RegisterWrapperComponent extends Component {

    submitRegister = values => {
       
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RegisterUser onSubmit={this.submitRegister}/>
        );
    }

};

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {
       
    };
}

const RegisterWrapper = connect(
    mapStateToProps,
    mapDispatchToProps()
)(RegisterWrapperComponent);

export default RegisterWrapper;