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
          <Route exact path="/" component={PhotoGrid}/>
          <Route path="/view/:postId" component={Single}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
