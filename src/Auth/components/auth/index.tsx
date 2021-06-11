import React from "react";
import "./index.scss";
import { Redirect, Route } from "react-router-dom";
import { RegisterForm } from "./registerForm";
import { LoginForm } from "./loginForm";


export const Auth: React.FC = ({}) => {
  return (
    <div className="box">
      <div className="photo-box">
        <img src={`${process.env.PUBLIC_URL}/login.jpg`} />
      </div>
      <div className="form-wrapper">
            <Redirect from='*'  to="/user/login"/>
            <Route  path="/user/register" component={RegisterForm} />
            <Route  path="/user/login" component={LoginForm} />
      </div>
    </div>
  );
};
