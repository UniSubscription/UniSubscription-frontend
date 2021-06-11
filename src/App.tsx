import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth } from "./Auth/components/auth";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
