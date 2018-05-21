import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import './Header.css';

export class HeaderComponent extends Component {

    render() {

        const {username} = this.props;

        return (
            <div className="header">
                <div className="header-container">
                    <Link to="/home" className="logo">Home</Link>
                    <Link to="/benchmark" className="link">Benchmark</Link>
                    {this.props.username !== "" ?
                        <div className="link">
                            Welkom {username}!
                        </div> : null
                    }
                    <div className="header-right">
                        {this.props.username !== "" ? null :
                            <div>
                                <Link to="/login" className="link">Login</Link>
                                <Link to="/register" className="link">Register</Link>
                            </div>
                        }

                    </div>
                </div>
            </div>
             );
        }
    };

    function mapStateToProps(state) {
        return {
        username: state.fetchLoginReducer.username,
    };
    }

    function mapDispatchToProps() {
    }

    const Header = connect(
    mapStateToProps,
    mapDispatchToProps()
    )(HeaderComponent);

    export default Header;