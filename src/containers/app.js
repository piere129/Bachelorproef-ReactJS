import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store-index';
const store = Store;

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="main-container">
                    {this.props.children}
                </div>
            </Provider>
        );
    }
}