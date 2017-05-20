/*
 *
 * ComicDetail HOC
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Loader from 'Components/Loader';
import { selectComicById } from 'Comics/selectors';

export default function withComicData(WrappedComponent) {

  class ComicDetailContainer extends React.Component {

    componentWillMount() {
     //this.props.dispatch( doFetchApplicationCourseRequested(this.props.params.appcourseid));
    }

    render() {
      if(this.props.loading){
        return <Loader />;
      } else if (this.props.comic) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <h2>Error loading data</h2>;
      }
    }
  }
  
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
