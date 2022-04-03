import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './composents/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CV from './composents/CV';
import CVAudiolVisuel from './composents/CVAudioVisuel';
import MissingPage from './composents/MissingPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/CV">
          <CV/>
          <CVAudiolVisuel/>
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
