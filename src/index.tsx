import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './composents/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CV from './composents/CV';
import CVAudiolVisuel from './composents/CVAudioVisuel';
import MissingPage from './composents/MissingPage';
import Parcours from './composents/Parcours';
import Contact from './composents/Contact';
import Footer from './composents/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/portefolio" exact component={App}>
        </Route>
        <Route path="/" exact component={App}>
          <App />
        </Route>
        <Route path="/CV" exact component={CV}>
          <CV/>
          <Footer/>
        </Route>
        <Route path="/Parcours" exact component={Parcours}>
          <Parcours/>
        </Route>
        <Route path="/Contact" exact component={Contact}>
          <Contact/>
        </Route>
        <Route path="/privacy-policy" component={() => {
        window.location.replace('https://ecole-ipssi.com/');
        return null}}>
        </Route>
        <Route path="/privacy-policy2" component={() => {
        window.location.replace('https://eltheria.000webhostapp.com/index.html');
        return null}}>
        </Route>
        <Route path="/privacy-policy3" component={() => {
        window.location.replace('https://www.univ-gustave-eiffel.fr/');
        return null}}>
        </Route>
        <Route>
          <MissingPage/>
        </Route>
      </Switch>
    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
