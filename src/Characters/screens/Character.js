/**
*
* Character
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterDetailContainer from 'Characters/containers/CharacterDetailContainer';
import Loader from 'Components/Loader';

function Character({character, loading}) {
  if (loading) {
    return (
      <div className="page page-character">
        <div className="page__head page__head__nav">
          <div className="container">
            <Link to="/characters">Back</Link>
          </div>
      </div>
        <div className="page-character page__head-dark">
          <div className="container">
            <div className="row">
              <div className="col-6">
                {character.thumbnail &&
                  <img className="heroimage__thumb" src={`${character.thumbnail.path}/standard_incredible.${character.thumbnail.extension} `} alt=""/>
                }
              </div>
              <div className="col-6">
                <h1 className="page__head__title">{character.name}</h1>
                <p className="page__head__desc">{character.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Loader />
    )
  }
}

Character.propTypes = {
  character: PropTypes.object,
  loading: PropTypes.bool,
};

export default CharacterDetailContainer(Character);
