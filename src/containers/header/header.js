import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

export class HeaderComponent extends Component {
    render() {
        return (
     <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <h2>Header</h2>
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         <ul>
        <li><Link to='/'>Counter</Link></li>
        <li><Link to='/test'>Nesting</Link></li>
      </ul>
         </div>
    </nav>
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

const Header = connect(
    //state setten voor dispatch, moet hier niet expliciet gebeuren maar moet er wel bijstaan
    //aangezien mapdispatch 2e argument moet zijn!
    mapStateToProps,
    mapDispatchToProps()
)(HeaderComponent);

export default Header;
