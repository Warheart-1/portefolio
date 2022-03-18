import React from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import Banner from "./Banner";
import Intro from "./Intro";
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Banner/>
        <Intro/>
    </div>
  );
}

export default App;
