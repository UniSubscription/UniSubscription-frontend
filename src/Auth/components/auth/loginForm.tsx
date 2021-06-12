import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions";
import { IAppState } from "../../../redux/interface";
import { useFormik } from "formik";
import * as Yup from "yup";

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const user = useSelector((state: IAppState) => state.user);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (values.email && values.password) {
        dispatch(login(values));
      }
    },
  });

  useEffect(() => {
    if (user.status === `SUCCESS`) {
      push("/subscription");
    }
  }, [user.status, push]);

  return (
    <>
      <h6 className="section-title">Login</h6>
      <form className="auth-form" 
      onSubmit={formik.handleSubmit}
      >
        <div className="form-wrap">
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-msg">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-wrap">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-msg">{formik.errors.password}</div>
          ) : null}
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
