import React, { Component } from 'react';
import CharactersListContainer from './../containers/CharactersListContainer';

function CharactersList() {
  return (
    <div className="container">
      <h2 className="page__title">Characters</h2>
      <CharactersListContainer />
    </div>
  );
}

CharactersList.propTypes = {
  
};

export default CharactersList;
