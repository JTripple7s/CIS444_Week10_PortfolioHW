import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

//I was having a lot of trouble getting this site to display in github pages so I looked up solutions online and with ai and it told me to switch
//to HashRouter and it seemingly fixed the issues I was having in the console log errors when I would run npm deploy

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);