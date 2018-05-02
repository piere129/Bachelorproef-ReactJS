import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

export class ParentComponent extends Component {

    render() {
        return (
            <div >
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };

}

function mapDispatchToProps() {
    return {
    };
}

const Parent = connect(
    mapStateToProps,
    mapDispatchToProps()
)(ParentComponent);

export default Parent;
