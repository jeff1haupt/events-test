import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Container from './container';
import reportWebVitals from './reportWebVitals';

// You can also use React.Fragments instead of StrictMode to fix the double firing
// React Fragments allows you to not have to wrap unnecessary divs around your elements
// https://reactjs.org/docs/fragments.html <-- check out the docs for this

ReactDOM.render(
  <React.Fragment> 
    <Container />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
