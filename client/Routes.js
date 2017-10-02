/**
 * Created by koyexes on 01/10/2017.
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App}/>
    </Switch>
  )
};

export default Routes;
