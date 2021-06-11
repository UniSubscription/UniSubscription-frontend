import React from "react";
import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Auth } from "./Auth/components/auth";
import { Subscription } from "./Subscription/components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user" component={Auth} />
        <Route exact path="/subscription" component={Subscription} />
        <Route path="*">
          <Redirect to="/user" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
