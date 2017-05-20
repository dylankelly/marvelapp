import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const marvelLogo = require('./marvel_logo.png');

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img height="80" src={marvelLogo} alt=""/>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
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
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    );
  }
}

export default NavBar;


