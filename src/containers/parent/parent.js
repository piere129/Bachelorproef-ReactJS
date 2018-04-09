import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../header/header';
import Home from '../home/home';

export class ParentComponent extends Component {
    render() {
        return (
            <div>
                 <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                     <h2>Navbar</h2>
                       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                         <ul>
                             <li><Link to='/'>Counter</Link></li>
                             <li><Link to='/test'>Nesting</Link></li>
                        </ul>
                      </div>
                 </nav>
                {this.props.children}
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

const Parent = connect(
    //state setten voor dispatch, moet hier niet expliciet gebeuren maar moet er wel bijstaan
    //aangezien mapdispatch 2e argument moet zijn!
    mapStateToProps,
    mapDispatchToProps()
)(ParentComponent);

export default Parent;
