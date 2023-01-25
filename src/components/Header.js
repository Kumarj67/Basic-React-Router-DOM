import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1 className="navbar" style={{ color: "white", cursor: "pointer" }}>
          Home
        </h1>
      </Link>
      <Link to={"/About"}>
        <h1 className="navbar" style={{ color: "white", cursor: "pointer" }}>
          About
        </h1>
      </Link>
      <Link to={"/Contact"}>
        <h1 className="navbar" style={{ color: "white", cursor: "pointer" }}>
          Contact
        </h1>
      </Link>
    </div>
  );
};

export default Header;
