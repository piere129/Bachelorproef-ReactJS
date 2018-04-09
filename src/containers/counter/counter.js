import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increaseAction} from '../../actions/actions';
import './counter.css'

 class CounterComponent extends Component {
    render() {
        const { value,increaseAction } = this.props;
        return (
            <div>
            <p id="test">Value is:</p>
            <p> {value}</p>
            <p> Increase value with 1:</p>
            <button onClick={increaseAction}>Increase</button>
            <hr/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    value: state.testReducer.count
  };
};

function mapDispatchToProps() {
  return {
    increaseAction
  };
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps()
)(CounterComponent);

export default Counter;