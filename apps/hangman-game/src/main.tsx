import React from 'react';
import { render } from 'react-dom';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);
