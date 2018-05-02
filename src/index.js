import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
import Routes from './routes.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

function startApp() {
    ReactDOM.render(
            <App>
                <Routes/>
            </App>
        ,
        document.getElementById('root')
    );
}

startApp();