import React, { Component } from 'react';
import ComicsListContainer from './../containers/ComicsListContainer';

class ComicsList extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="page__title">Comics</h2>
        <ComicsListContainer />
      </div>
    );
  }
}

export default ComicsList;
