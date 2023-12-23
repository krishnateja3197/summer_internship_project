import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contextapi from './components/Contextapis/Contextapi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contextapi>
    <App />
  </Contextapi>
);
