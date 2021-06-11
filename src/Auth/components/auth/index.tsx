import React from "react";
import "./index.scss";
import { Redirect, Route } from "react-router-dom";
import { RegisterForm } from "./registerForm";
import { LoginForm } from "./loginForm";

export const Auth: React.FC = () => {
  return (
    <div className="box">
      <div className="photo-box">
        <img src={`${process.env.PUBLIC_URL}/login.jpg`} alt="Login" />
      </div>
      <div className="form-wrapper">
        <Route path="/user/register" component={RegisterForm} />
        <Route path="/user/login" component={LoginForm} />
        <Redirect from="/" to="/user/login" />
      </div>
    </div>
  );
};
