import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions";
import { IAppState } from "../../../redux/interface";

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const user = useSelector((state: IAppState) => state.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

  const handleLogin = (evt: React.FormEvent) => {
    evt.preventDefault();

    if (formData.email && formData.password) {
      dispatch(login(formData));
    }
  };

  useEffect(() => {
    if (user.status === `SUCCESS`) {
      push("/subscription");
    }
  }, [user.status, push]);

  return (
    <>
      <h6 className="section-title">Login</h6>
      <form onSubmit={handleLogin}>
        <div className="form-wrap">
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleFormChange}
            placeholder="Email address"
          ></input>
        </div>
        <div className="form-wrap">
          <label htmlFor="password"></label>
          <input
            type="password"
            onChange={handleFormChange}
            name="password"
            id="password"
            placeholder="Password"
          ></input>
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
