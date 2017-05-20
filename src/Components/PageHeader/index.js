import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import NavBar from 'Components/NavBar';

class PageHeader extends Component {
  render() {
    return (
      <header className="PageHeader">
        <div className="container">
          <NavBar />
        </div>
      </header>
    );
  }
}

export default PageHeader;
