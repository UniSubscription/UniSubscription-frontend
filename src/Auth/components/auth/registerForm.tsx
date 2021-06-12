import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authService } from "../../service";

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({});
  const { push } = useHistory();

  const handleFormChange = React.useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = evt.target;
      setFormData((data) => ({
        ...data,
        [name]: value,
      }));
    },
    [setFormData]
  );

  const handleRegister = (evt: React.FormEvent) => {
    evt.preventDefault();
    authService.registerUser(formData).then(() => push("/user/login"));
  };
  return (
    <>
      <h6 className="section-title">Register</h6>
      <form className="auth-form" onSubmit={handleRegister}>
        <div className="form-wrap">
          <label htmlFor="name"></label>
          <input
            type="text"
            onChange={handleFormChange}
            id="name"
            required
            name="name"
            placeholder="Name"
          ></input>
        </div>
        <div className="form-wrap">
          <label htmlFor="surname"></label>
          <input
            type="text"
            onChange={handleFormChange}
            id="surname"
            required
            name="surname"
            placeholder="Surname"
          ></input>
        </div>
        <div className="form-wrap">
          <label htmlFor="email"></label>
          <input
            type="text"
            onChange={handleFormChange}
            id="email"
            required
            name="email"
            placeholder="Email address"
          ></input>
        </div>
        <div className="form-wrap">
          <label htmlFor="password"></label>
          <input
            type="password"
            onChange={handleFormChange}
            id="password"
            required
            name="password"
            placeholder="Password"
          ></input>
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
