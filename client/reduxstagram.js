import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import css from './styles/style.styl';
import Routes from './Routes';

const history = createBrowserHistory();

render((
  <Provider store={store}>
    <BrowserRouter >
      <Routes />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
