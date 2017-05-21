import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doFetchCharactersRequested } from './../actions';
import { selectCharacters, charactersListLoading } from './../selectors';
import CharactersList from './../components/CharactersList';
import Loader from 'Components/Loader';
export class CharactersListContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount() {
    this.props.dispatch(doFetchCharactersRequested());
  }

  render() {
    const characters = this.props.characters;

    if (this.props.loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div>
          <CharactersList characters={characters} />
        </div>
      );    
    }
  }
}

CharactersListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const characters = selectCharacters(state);
  const loading = charactersListLoading(state);
  return {
    characters,
    loading,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersListContainer);
