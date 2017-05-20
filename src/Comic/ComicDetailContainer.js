/*
 *
 * ComicDetail HOC
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Loader from 'Components/Loader';

export default function withComicData(WrappedComponent) {

  class ComicDetailContainer extends React.Component {

    componentWillMount() {
     //this.props.dispatch( doFetchApplicationCourseRequested(this.props.params.appcourseid));
    }

    render() {
      if(this.props.request.loaded && this.props.request.error.status < 500){
        return <WrappedComponent {...this.props} />;
      } else if (this.props.request.loading) {
        return <Loader />;
      } else {
        return <h2>Error loading data</h2>;
      }
    }
  }
  
  function mapStateToProps(state, props){

    return {

    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(ComicDetailContainer);
}
