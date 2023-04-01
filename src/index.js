import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav';

import './index.css';


import reportWebVitals from './reportWebVitals';

const navList = ['O NAS','USŁUGI','CENNIK','KONTAKT'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav list={navList}></Nav>
      
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
