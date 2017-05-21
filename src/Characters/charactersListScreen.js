import React, { Component } from 'react';
import CharactersListContainer from './containers/CharactersListContainer'


class CharactersList extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="page__title">Characters</h2>
        <CharactersListContainer />
      </div>
    );
  }
}

export default CharactersList;
