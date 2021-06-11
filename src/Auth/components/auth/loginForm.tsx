import React from "react";
import { Link } from "react-router-dom";

export const LoginForm: React.FC = () => {
  return (
    <>
      <h6 className="section-title">Login</h6>
      <form className="auth-form">
        <div className="form-wrap">
          <label htmlFor="email"></label>
          <input type="text" id="email" placeholder="Email address"></input>
        </div>
        <div className="form-wrap">
          <label htmlFor="password"></label>
          <input type="text" id="password" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn-main">
          Login
        </button>
      </form>
      <div className="link-wrap">
        <p>Don't you have an account yet?</p>
        <Link className="btn-login" to="register">
          Register
        </Link>
      </div>
    </>
  );
};
