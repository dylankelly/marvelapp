/*
 *
 * ComicDetail HOC
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'Components/Loader';
import { selectCharacterById, charactersListLoading } from 'Characters/selectors';
import { doFetchCharacterRequested } from 'Characters/actions';

export default function withCharacterData(WrappedComponent) {

  class CharacterDetailContainer extends React.Component {

    componentWillMount() {
     this.props.dispatch( doFetchCharacterRequested(this.props.match.params.characterid));
    }

    render() {
      if(this.props.loading){
        return <Loader />;
      } else if (this.props.character) {
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

  CharacterDetailContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired,
  };

  
  function mapStateToProps(state, props){
    const loading = charactersListLoading(state);
    const character = selectCharacterById(state, props.match.params.characterid);
    return {
      loading,
      character,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(CharacterDetailContainer);
}
