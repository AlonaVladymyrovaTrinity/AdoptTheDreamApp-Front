//import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import UserContext from './UserContext';
import Cookies from 'js-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider
    value={{ isAuthenticated: Cookies.get('isAuthenticated') }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
