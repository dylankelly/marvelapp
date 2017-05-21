import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doFetchComicsRequested } from './../actions';
import { selectComics, comicsListLoading, comicsFilter } from './../selectors';
import ComicListItem from './../components/ComicListItem';
import { chunk } from 'lodash';
import ListFilter from 'Comics/components/ListFilter';
import Loader from 'Components/Loader';

export class ComicsListContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  
  componentWillMount() {
    this.props.dispatch(doFetchComicsRequested());
  }

  render() {
    const rows = chunk(this.props.comics, 4);
      return (
        <div>
          <ListFilter dispatch={this.props.dispatch} filter={this.props.filter}/>
          {this.props.loading ? 
            <Loader />
            :
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
          }
      </div>
    );    
  }

}

ComicsListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const comics = selectComics(state);
  const loading = comicsListLoading(state);
  const filter = comicsFilter(state);
  return {
    comics,
    loading,
    filter,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsListContainer);
