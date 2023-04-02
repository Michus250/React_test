import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/home';
import PriceList from './components/priceList';
import Contact from './components/contact';
import './index.css';


import reportWebVitals from './reportWebVitals';
import Services from './components/services';

const navList = [['O NAS','/'],['USŁUGI','/uslugi'],['CENNIK','/cennik'],['KONTAKT','kontakt']];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav list={navList}></Nav>
    
      <Routes>
        <Route path ="/" element= {<Home></Home>}></Route>
        <Route path ="/uslugi" element= {<Services></Services>}></Route>
        <Route path ="/cennik" element= {<PriceList></PriceList>}></Route>
        <Route path ="/kontakt" element= {<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
      
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
