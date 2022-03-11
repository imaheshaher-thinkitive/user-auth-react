import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
      </nav>
    </div>
  );
}

export default Header;
