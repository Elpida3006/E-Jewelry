import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './tests/reportWebVitals';
import {UserContext} from './global-context/UserContexts';
import Routes from './lazy-routes';
//  Route, Link, Switch
ReactDOM.render(

  <React.StrictMode>

    <Routes> 
    <UserContext>
       <App />
    </UserContext>
    </Routes>
 
    
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
