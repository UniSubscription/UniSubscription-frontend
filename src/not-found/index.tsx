import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <img src={`${process.env.PUBLIC_URL}/404.jpg`} alt="Not Found" />
      <p className="button-back">Back to <Link to="subscription"> HOME PAGE <img src={`${process.env.PUBLIC_URL}/arrow-r.svg`}/></Link></p>
    </div>
  );
};
