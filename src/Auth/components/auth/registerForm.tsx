import React from "react";
import { Link } from "react-router-dom";

export const RegisterForm: React.FC = () => {
  return (
    <>
      <h6 className="section-title">Register</h6>
      <form>
        <div className="form-wrap">
          <label htmlFor="full-name"></label>
          <input type="text" id="full-name" placeholder="Full Name"></input>
        </div>
        <div className="form-wrap">
          <label htmlFor="email"></label>
          <input type="text" id="email" placeholder="Email address"></input>
        </div>
        <div className="form-wrap">
          <label htmlFor="password"></label>
          <input type="text" id="password" placeholder="Password"></input>
        </div>
        <div className="form-wrap">
          <label htmlFor="password"></label>
          <input type="text" id="password" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn-main">
          Register
        </button>
      </form>
      <div className="link-wrap">
        <p>Do you have an account?</p>
        <Link className="btn-login" to="login">
          Login
        </Link>
      </div>
    </>
  );
};
