import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate, warn } from './Validator';
import RenderField from '../RenderField/RenderField';


const SyncValidationForm = props => {


    const { handleSubmit, submitting } = props;
    return (
        <div className="item-wrapper-form">
            <form onSubmit={handleSubmit}>
                <Field name="username" type="text" component={RenderField} label={'Username:'}/>
                <Field name="passwordLogin" type="password" component={RenderField} label={'Wachtwoord:'}/>
                <button className="form-button" type="submit" disabled={submitting}>{'Log In:'}</button>
            </form>
        </div>
    );
};

const LoginUser = reduxForm(
    { form: 'create', validate, warn }
)(SyncValidationForm);

export default LoginUser;