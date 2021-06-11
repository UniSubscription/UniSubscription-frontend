import React from "react";
import { NewSubscription } from "../newSubscription";
import { Link } from "react-router-dom";
import "./index.scss";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/tap.svg`} alt="logo" />
          <p>My Subscriptions</p>
        </div>
        <div className="user_wrapper">
          <NewSubscription />
          <div className="user">
            <p>Zumrud Aliyeva</p>
            <Link to="/user/" className="btn_logout">
              <img src={`${process.env.PUBLIC_URL}/logout.svg`} alt="Logout" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
