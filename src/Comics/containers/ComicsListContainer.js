import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchComicsRequested } from './../actions';
import { selectComics, comicsListLoading } from './../selectors';
import ComicListItem from './../components/ComicListItem';
import { chunk } from 'lodash';

export class ComicsListContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount() {
    this.props.dispatch(doFetchComicsRequested());
  }

  render() {
    const rows = chunk(this.props.comics, 4);
    if (this.props.loading) {
      return (
        <h2>...loading</h2>
      )
    } else {
      return (
        <div>
         {
            rows.map((comics, index) => 
              <div key={index} className="row">
                {comics.map((comic) => 
                  <ComicListItem key={comic.id} comic={comic} />
                )}
              </div>
            )
          }
        </div>
      );    
    }
  }
}

ComicsListContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const comics = selectComics(state);
  const loading = comicsListLoading(state);
  return {
    comics,
    loading,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsListContainer);
