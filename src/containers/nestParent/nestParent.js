import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link,Route} from 'react-router-dom';
import NestChild from '../nestChild/nestChild';

 class NestParentComponent extends Component {
    render() {
        return (
          <div>
          <h1> Nesting parent: </h1>
           <Link to="/test/nest"> Show nested component! </Link>
           <Route path="/test/nest" component={NestChild}/>
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

const NestParent = connect(
  mapStateToProps,
  mapDispatchToProps()
)(NestParentComponent);

export default NestParent;