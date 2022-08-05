import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'https://0799-58-78-54-29.jp.ngrok.io/';
//axios.defaults.withCredentials = true;
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyle />
        <App />
      </Suspense>
    </RecoilRoot>
  </BrowserRouter>,
);
