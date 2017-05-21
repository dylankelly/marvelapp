import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from 'Components/Loader';
import ComicDetailContainer from 'Comics/containers/ComicDetailContainer';
import ComicDetail from 'Comics/components/ComicDetail';
import ComicCharactersContainer from './../containers/ComicCharactersContainer';

class Comic extends Component {
  render() {
    const comic = this.props.comic;
    if (this.props.loading) {
      return (
        <Loader />      
      )
    } else {
      return (
        <div className="page page-comic">
          <div className="page__head__nav">
            <div className="container">
              <Link to="/comics">back</Link>
            </div>
          </div>
          <div className="page__head page__head-dark">
            <ComicDetail comic={comic} />
            <div className="container">
              <ComicCharactersContainer comicId={comic.id} />
            </div>
          </div>
        </div>
      );
    }
  }
}

Comic.propTypes = {
  comic: PropTypes.object,
  loading: PropTypes.bool,
};

export default ComicDetailContainer(Comic);
