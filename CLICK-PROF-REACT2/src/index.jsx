import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './css/index.css';



ReactDOM.render(
  <Auth0Provider 
  domain="dev-1bji-06g.us.auth0.com" 
  clientId="cm4FUhHdFe6dMrePTrVkddM20S72b0vr" 
  redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
  ,
  document.getElementById('root')
);
