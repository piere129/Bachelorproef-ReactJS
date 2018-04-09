import React, { Component } from 'react';
import NestParent from '../nestParent/nestParent';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom'
import Counter from '../counter/counter';

export class HomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Home component </h1>

            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {
    };
}

const Home = connect(
    //state setten voor dispatch, moet hier niet expliciet gebeuren maar moet er wel bijstaan
    //aangezien mapdispatch 2e argument moet zijn!
    mapStateToProps,
    mapDispatchToProps()
)(HomeComponent);

export default Home;
