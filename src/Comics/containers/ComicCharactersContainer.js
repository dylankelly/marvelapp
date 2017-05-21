import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchComicCharactersRequested } from 'Characters/actions';
import { selectCharactersByComicId, charactersListLoading } from 'Characters/selectors';
import ComicListItem from './../components/ComicListItem';
import { chunk } from 'lodash';
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
  dispatch: React.PropTypes.func.isRequired,
  characters: React.PropTypes.array,
  comicId: React.PropTypes.number,
};

function mapStateToProps(state, props) {
  const characters = selectCharactersByComicId(state, props.comicId);
  console.log('characters by comicId', characters);
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
