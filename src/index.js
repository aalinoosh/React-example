import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

import Test from './Test';
import Player from './components/Player/Player'
import { DesktopView, MacView, NotMacView, CheckMobile, NotMobile, FireFoxView, NotFireFoxView, Orientation} from './components/NewResponsive'
import { BrowserView, MobileView,TabletView, MobileOnlyView } from "react-device-detect";


import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
// import DevicesContext from './state';
// import { logDOM } from '@testing-library/react';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <main>
     <h2>
        <DesktopView>You're on a Desktop</DesktopView>
        <br/>
        <TabletView>You're on a Tablet</TabletView>
        <br/>
        <MobileOnlyView>You're on a MobileOnlyView</MobileOnlyView>
        <br/>
        <BrowserView>You're on a Browser</BrowserView>
        <br/>
        <MacView>You're on a Mac</MacView>
        <br/>
        <NotMacView>No You're not on  a Mac</NotMacView>
        <br/>
        <CheckMobile>Yes, U'could be on Mobile or Tablet</CheckMobile>
        <br/>
        <NotMobile>No, U coudn't be on Mobile or Tablet</NotMobile>
        <br/>
        <MobileView> MobileView, Another way to check</MobileView>
        <br/>
        <NotFireFoxView> You're on a NotFireFoxView</NotFireFoxView>
        <br/>
        <FireFoxView>You're on a FireFox</FireFoxView>
        <br/>
        <NotFireFoxView> You're on a NotFireFoxView</NotFireFoxView>
        <br/>
        <FireFoxView>You're on a FireFox</FireFoxView>
        <br/>
        <Orientation></Orientation> 
      </h2>
    </main>
    <Player/>
    
    <Test/> 
    {/* <Test3/> */}
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
console.log(" So what is onchange() , onchange is an React props that could pass as a argument");








 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
