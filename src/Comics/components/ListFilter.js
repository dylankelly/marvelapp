/**
*
* Comic List Item
*
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import { debounce } from 'lodash';
import { doUpdateComicsFilter } from 'Comics/actions';
import getApiReq from 'API';


class ListFilter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filteredCharacters: [],
      filteredSeries: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = debounce(this.handleSearch.bind(this), 500);
  }

  getCharacters(input) {
    return getApiReq('characters', {nameStartsWith: input})
      .then((response) => {
        let results = [];
        if (response.status === 200) {
          results = response.body.data.results
        }
        return results;
      }).then((results) => {
        const options = results.map((character) => ({
          label: character.name,
          value: character.id,
        }))
        return { options };
      });
  }


  handleChange(value) {
    this.props.dispatch(doUpdateComicsFilter({ characters: [...value] }));
  }

  handleSearch(value) {
    this.props.dispatch(doUpdateComicsFilter({ search: value }));
  }
 
  render() {

    return (
      <div className="comic_filter row">
        <div className="col-6">
          <h4 className="comic_filter__label">FILTER :</h4>
        </div>
        <div className="col-6 row">
          <div className="col-6">
            {this.props.filter && 
              <Select.Async
                multi
                name="characters"
                placeholder="Filter Characters"
                autoload={false}
                value={this.props.filter.characters}
                onChange={this.handleChange}
                loadOptions={this.getCharacters}
              />
            }
          </div>

          <div className="col-6">
            <div className="input-group comic_filter__search">
              <span className="input-group-addon"><i className="fa fa-search"></i></span>
              <input type="text" onChange={(e) => this.handleSearch(e.target.value)} className="form-control" placeholder="Search" type="text"/>
            </div>
            
          </div>
        </div>
        
      </div>  
    );
  }
}

ListFilter.propTypes = {
  dispatch: React.PropTypes.func,
};

export default ListFilter;
