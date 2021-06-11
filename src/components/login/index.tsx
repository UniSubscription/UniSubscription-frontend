import React from "react";
import "./index.scss";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { RegisterForm } from "./registerForm";
import { LoginForm } from "./loginForm";


// const useStyle = makeStyles({
//   container: {
//     width: "100%",
//     maxWidth: "500px",
//     background: "#fff",
//   },
//   input: {
//     border: "1px solid black",
//   },
// });

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
