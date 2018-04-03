import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
import Routes from './routes.js';


function startApp() {
    ReactDOM.render(
            <App>
                <Routes/>    
            </App>,
        document.getElementById('root')
    );
}

startApp();