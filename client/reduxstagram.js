import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';
import css from './styles/style.styl';
import Routes from './Routes';

const history = createBrowserHistory();

render((
  <BrowserRouter >
    <Routes />
  </BrowserRouter>
), document.getElementById('root'));
