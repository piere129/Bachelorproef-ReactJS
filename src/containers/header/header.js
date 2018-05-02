import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export class HeaderComponent extends Component {

    render() {
        return (
            <Navbar inverse className="test">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home"> Home </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem componentClass={Link} href="/shoppingList" to="/shoppingList">

                    </NavItem>
                    <NavItem componentClass={Link} href="/login" to="/login">
                        Log in
                    </NavItem>
                    <NavItem componentClass={Link} href="/register" to="/register">
                        Register
                    </NavItem>
                </Nav>
            </Navbar>
            );
    }
};

 const Header = HeaderComponent;

export default Header;