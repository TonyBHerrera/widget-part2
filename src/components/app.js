import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Lottery from "./lottery"
import RemoveFirstLast from "./remove-first-last"
import ThingOne from "./thing"
import ThingTwo from "./thing2"
import ThingThree from "./thing3"
import ThingFour from "./thing4"
import ThingFive from "./thing5"
import Home from "./home"
import NavigationContainer from "./navigation/navigation-container"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/lottery" component={Lottery} />
              <Route path="/remove-first-last" component={RemoveFirstLast} />
              <Route path="/thing" component={ThingOne} />
              <Route path="/thing2" component={ThingTwo} />
              <Route path="/thing3" component={ThingThree} />
              <Route path="/thing4" component={ThingFour} />
              <Route path="/thing5" component={ThingFive} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}
