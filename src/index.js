import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

var findDevice = navigator.platform.toLowerCase();
var filter = `win32|win64|mac|intelmac|linux`;
var device = findDevice.match(filter);

if (device) {
  ReactDOM.render(
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <Router histoty={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>,
    document.getElementById('root')
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
