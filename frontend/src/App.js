import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import TimeLine from './pages/Timeline';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/timeline" component={TimeLine} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
