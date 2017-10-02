/**
 * Created by koyexes on 01/10/2017.
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Main}/>
    </Switch>
  )
};

export default Routes;
