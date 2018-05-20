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
                    <Link to="/home" class="logo">home</Link>
                    {this.props.username !== "" ?
                        <div className="link">
                            Welkom {username}!
                        </div> : null
                    }
                    <div className="header-right">
                        {this.props.username !== "" ? null :
                            <div>
                                <Link to="/login" class="link">login</Link>
                                <Link to="/register" class="link">register</Link>
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