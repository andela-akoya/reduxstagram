/**
 * Created by koyexes on 01/10/2017.
 */
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends React.Component {
  render() {
    return(
      <div>
        <h1>
          <Link to="/"> Reduxstagram </Link>
        </h1>
        <Switch>
          <Route exact path="/" render = { () => (<PhotoGrid {...this.props} />) } />
          <Route path="/view/:postId" render = { () => (<Single {...this.props} />) }/>
        </Switch>
      </div>
    );
  }
}

export default Main;
