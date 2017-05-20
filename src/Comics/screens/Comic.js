import React, { Component } from 'react';
import ComicDetailContainer from 'Comics/containers/ComicDetailContainer';
import ComicDetail from 'Comics/components/ComicDetail';
import { Link } from 'react-router-dom';

class Comic extends Component {
  render() {
    const comic = this.props.comic;

    return (
      <div className="page">
        <div className="page__head__nav">
          <div className="container">
            <Link to="/comics">back</Link>
          </div>
        </div>
        <div className="page__head page__head-dark">
          <div className="container">
            <ComicDetail comic={comic} />
          </div>
        </div>
      </div>
    );
  }
}

export default ComicDetailContainer(Comic);
