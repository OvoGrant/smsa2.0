import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter as Router} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Auth0Provider
    domain="dev-59im854i.us.auth0.com"
    clientId="GzpsUZXzo8mFP3rdGscoUInnFCBlF3xk"
    redirectUri={window.location.origin}
  >
      <App />
      </Auth0Provider>
      </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita
