import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchCharactersRequested } from './../actions';
import { selectCharacters, charactersListLoading } from './../selectors';
import CharactersList from './../components/CharactersList';
import { chunk } from 'lodash';
import ListFilter from 'Comics/components/ListFilter';

export class CharactersListContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount() {
    this.props.dispatch(doFetchCharactersRequested());
  }

  filter(filterVal) {
    console.log(filterVal);
  }

  render() {
    const characters = this.props.characters;

    if (this.props.loading) {
      return (
        <h2>...loading</h2>
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
  dispatch: React.PropTypes.func.isRequired,
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
