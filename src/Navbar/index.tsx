import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Navbar: React.FC<{ user: { id: number; fullName: string } }> = ({
  user,
}) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/tap.svg`} alt="logo" />
          <p>My Subscriptions</p>
        </div>
        <div className="user_wrapper">
          <div className="user">
            <p>{user?.fullName}</p>
            <Link to="/user/" className="btn_logout">
              <img src={`${process.env.PUBLIC_URL}/logout.svg`} alt="Logout" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
