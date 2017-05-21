import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doFetchComicCharactersRequested } from 'Characters/actions';
import { selectCharactersByComicId, charactersListLoading } from 'Characters/selectors';
import Loader from 'Components/Loader';
import CharactersList from 'Characters/components/CharactersList';

export class ComicCharactersContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount() {
    this.props.dispatch(doFetchComicCharactersRequested(this.props.comicId));
  }

  render() {

      return (
        <div>
          {this.props.loading && this.props.characters && this.props.characters.length > 0  ? 
            <Loader />
            :
            <div>
              <h2 style={{color: 'white', margin: '20px 0'}}>Characters</h2>
              <CharactersList characters={this.props.characters} />
            </div>
          }
      </div>
    );    
  }

}

ComicCharactersContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  characters: PropTypes.array,
  comicId: PropTypes.number,
};

function mapStateToProps(state, props) {
  const characters = selectCharactersByComicId(state, props.comicId);
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

export default connect(mapStateToProps, mapDispatchToProps)(ComicCharactersContainer);
