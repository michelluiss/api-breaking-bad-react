import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Characters from './views/Characters/Characters'
import Episodes from './views/Episodes/Episodes'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Characters} />
      <Route path="/episodes" component={Episodes} />
    </Switch>
  </BrowserRouter>
)

export default Routes;