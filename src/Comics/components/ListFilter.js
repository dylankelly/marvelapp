/**
*
* Comic List Item
*
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
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
    this.props.dispatch(doUpdateComicsFilter(value));
  }
 
  render() {

    return (
      <div className="comic_filter row">
        <div className="col">
          <h4>FILTER :</h4>
        </div>
        <div className="col">
          {this.props.filter && 
            <Select.Async
              multi
              name="characters"
              autoload={false}
              value={this.props.filter.characters}
              onChange={this.handleChange}
              loadOptions={this.getCharacters}
            />
          }
        </div>
        
      </div>  
    );
  }
}

ListFilter.propTypes = {
  dispatch: React.PropTypes.func,
};

export default ListFilter;
