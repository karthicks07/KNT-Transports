import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestComponent from './components/FunctionalComponents/testComponent';
import reportWebVitals from './reportWebVitals';
import Login from './components/LoginForm/Login'
import PropsComponent from './components/FunctionalComponents/PropsComponent';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <Login/>
  </div>
);

reportWebVitals();
