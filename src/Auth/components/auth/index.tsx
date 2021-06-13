import React from "react";
import "./index.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { RegisterForm } from "./registerForm";
import { LoginForm } from "./loginForm";

export const Auth: React.FC = () => {
  const currentPath = window.location.pathname;
  return (
    <div className="box">
      <div className="photo-box">
        <img src={`${process.env.PUBLIC_URL}/login.jpg`} alt="Login" />
      </div>
      <div className="form-wrapper">
        <Switch>
          <Route path="/user/register" component={RegisterForm} />
          <Route path="/user/login" component={LoginForm} />
          {currentPath === "/" ||
          currentPath === "/user" ||
          currentPath === "/user/" ? (
            <Redirect to="/user/login" />
          ) : (
            <Redirect to="/not-found" />
          )}
        </Switch>
      </div>
    </div>
  );
};
