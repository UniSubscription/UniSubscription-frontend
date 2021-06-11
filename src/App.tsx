import React from "react";
import "./App.scss";
// import {Login} from "./components/login";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { RegisterForm } from "./components/login/registerForm";
import { LoginForm } from "./components/login/loginForm";
import { Auth } from "./components/login";

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
