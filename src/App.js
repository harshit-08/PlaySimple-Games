import React, { useState } from 'react';
import './App.css';
import Games from './components/Games';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HayDay from './components/HayDay';
import Footer from './components/Footer';
import Home from './components/Home';
import CookieConsent from "react-cookie-consent";

function App() {
  const [showGames, setshowGames] = useState(false);
  const [showList, setShowList] = useState(false);
  const gamesHandler = () => {
    setshowGames(!showGames);
  }
  const handleClickInput = () => {
    setShowList(true);
    console.log(showList);
}
const handleClickBanner = () => {
  setShowList(false);
  console.log(showList);
}
const handleAccept = () => {
  sessionStorage.setItem("accepted", "true");
}
const accepted = sessionStorage.getItem("accepted");
  
  return (
    <Router>
    <div className="App">
    <Header gamesHandler={gamesHandler} handleClickInput={handleClickInput} showList={showList} />
    { showGames ? <Games /> : null}
    <Route path='/' exact  component={Home} />
    <Route path='/hayday' exact  component={ () => (<HayDay handleClickBanner = {handleClickBanner} />)}/>
    <Footer />
    {accepted == true ? 
    <CookieConsent debug={true}
    style={
    {background : 'black'},
    {height: '70px'}
    }
    buttonText="GOT IT!"
    expires={365}
    onAccept={handleAccept}
    >
    Our site uses cookies to enhance your user experience and measure site traffic.
    </CookieConsent>
     : null}
    </div>
    </Router>
  );
}

export default App;
