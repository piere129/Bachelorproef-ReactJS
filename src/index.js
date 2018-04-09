import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';


function startApp() {
    ReactDOM.render(

          <App>
              <Routes/>
         </App>,
        document.getElementById('root')
    );
}

startApp();