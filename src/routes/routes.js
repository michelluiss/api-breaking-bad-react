import React from "react";
import { Switch, Route } from 'react-router-dom';
import Characters from '../views/Characters/Characters'
import Episodes from '../views/Episodes/Episodes'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Characters} />
    <Route path="/episodes" component={Episodes} />
  </Switch>
)

export default Routes;