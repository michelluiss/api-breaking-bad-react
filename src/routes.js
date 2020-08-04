import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Characters from './views/Characters/Characters'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Characters} />
    </Switch>
  </BrowserRouter>
)

export default Routes;