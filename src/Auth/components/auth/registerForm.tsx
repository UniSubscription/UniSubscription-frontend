import React from "react";
import { Link, useHistory } from "react-router-dom";
import { authService } from "../../service";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

export const RegisterForm: React.FC = () => {
  const { push } = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      surname: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      authService.registerUser(values).then(() => push("/user/login"));
      swal({
        title: "Congratulations!",
        text: "You have successfully registered!",
        icon: "success",
      });
    },
  });
  return (
    <>
      <h6 className="section-title">Register</h6>
      <form className="auth-form" onSubmit={formik.handleSubmit}>
        <div className="form-wrap">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-msg">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-wrap">
          <label htmlFor="surname"></label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Surname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
          />
          {formik.touched.surname && formik.errors.surname ? (
            <div className="error-msg">{formik.errors.surname}</div>
          ) : null}
        </div>
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
            id="password"
            name="password"
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
