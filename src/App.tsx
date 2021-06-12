import React from "react";
import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Auth } from "./Auth/components/auth";
import { Subscription } from "./Subscription/components";
import { NotFound } from "./not-found";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user" component={Auth} />
        <Route exact path="/subscription" component={Subscription} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
