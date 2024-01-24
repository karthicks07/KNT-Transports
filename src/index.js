import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestComponent from './components/FunctionalComponents/testComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>This button is summa, it is for test purpose!</h1>
    <center><a><button>Click to Wow!</button></a></center>
    <TestComponent></TestComponent>
  </div>
);

reportWebVitals();
