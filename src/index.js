import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Approvider } from './pages/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Approvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Approvider>
  </React.StrictMode>
);


reportWebVitals();
