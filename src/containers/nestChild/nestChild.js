import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';



 class NestChildComponent extends Component {
    render() {
        return (
            <div>
              <p> dit is het nesting child! </p>
           </div>
        );
    }
}

function mapStateToProps(state) {
  return {
  };
};

function mapDispatchToProps() {
  return {
  };
}

const NestChild = connect(
  mapStateToProps,
  mapDispatchToProps()
)(NestChildComponent);

export default NestChild;