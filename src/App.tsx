import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth } from "./Auth/components/auth";
import { Subscription } from "./Subscription/components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user" component={Auth} />
        <Route exact path="/subscription" component={Subscription} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
