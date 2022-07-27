import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import {RecoilRoot} from 'recoil';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = '';
axios.defaults.withCredentials = true;
root.render(
  <BrowserRouter>
  <RecoilRoot>
    <GlobalStyle/>
    <App />
  </RecoilRoot>
  </BrowserRouter>
);

