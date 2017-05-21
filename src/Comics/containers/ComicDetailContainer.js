/*
 *
 * ComicDetail HOC
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'Components/Loader';
import { selectComicById } from 'Comics/selectors';
import { doFetchComicRequested } from 'Comics/actions';

export default function withComicData(WrappedComponent) {

  class ComicDetailContainer extends React.Component {

    componentWillMount() {
     this.props.dispatch( doFetchComicRequested(this.props.match.params.comicid));
    }

    render() {
      if(this.props.loading){
        return <Loader />;
      } else if (this.props.comic) {
        return <WrappedComponent {...this.props} />;
      } else {
        return (
          <div className="container">
            <h2>Error loading data</h2>
          </div>
        );
      }
    }
  }

  ComicDetailContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    comic: PropTypes.object.isRequired,
  };
  
  function mapStateToProps(state, props){
    const loading = false;
    const comic = selectComicById(state, props.match.params.comicid);
    return {
      loading,
      comic,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(ComicDetailContainer);
}
