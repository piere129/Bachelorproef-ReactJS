import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class NotFoundPageComponent extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <h3>{'The page you are trying to access does not exist!'}</h3>
                <Link to="/"> {'Go back'}</Link>
            </div>
        );
    }
}

const NotFoundPage = NotFoundPageComponent;

export default NotFoundPage;
