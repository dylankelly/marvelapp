/**
*
* CharacterListItem
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

function CharacterListItem({character}) {
  return (
    <div className="list_item col-xs-12 col-md-3">
      <Link to={`/characters/${character.id}`}>
        <div className="list_item__inner">
          <div className="list_item__thumb list_item__thumb-circle">
            <div className="list_item__thumb_border"></div>
            <img className="list_item__thumb_image" src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension} `} alt=""/>
          </div>
          <div className="list_item__desc">
            <h4 className="list_item__title">{character.name}</h4>
          </div>
          <a href="#" className="list_item__link btn btn-primary btn-marvel"><span>View</span></a>
        </div>
      </Link>
    </div>
  );
}

CharacterListItem.propTypes = {

};

export default CharacterListItem;







