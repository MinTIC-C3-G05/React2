import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './css/index.css';
import axios from 'axios'



// BASE URL 'https://backend-notas.herokuapp.com/api' or local test 'http://localhost:4000/api/'
axios.defaults.baseURL = 'https://backend-notas.herokuapp.com/api'

ReactDOM.render(
  <Auth0Provider 
  domain= "dev-1bji-06g.us.auth0.com"
  //"dev-1bji-06g.us.auth0.com" or 'dev-3jwrl567.us.auth0.com' 
  clientId= "cm4FUhHdFe6dMrePTrVkddM20S72b0vr"
  //"cm4FUhHdFe6dMrePTrVkddM20S72b0vr" or 'EeKnzgynNDFg47n8iRm3r8MP2Y1TBPSg'
  redirectUri={window.location.origin}
  >


    <App />
  </Auth0Provider>
  ,
  document.getElementById('root')
);
