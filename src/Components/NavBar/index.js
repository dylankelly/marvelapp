import React from "react";
import { Link } from "react-router-dom";

const marvelLogo = require("./marvel_logo.png");

function NavBar() {
  return (
    <nav className="Navbar-Top navbar navbar-toggleable-md navbar-light">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">
        <img
          src={marvelLogo}
          height="82"
          className="d-inline-block align-top"
          alt="Home"
        />
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/Comics">Comics</Link>
          </li>
          <li className="nav-item">
            <Link to="/Characters">Characters</Link>
          </li>
          <li className="nav-item">
            <Link to="/Series">Series</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
