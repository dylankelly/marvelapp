/**
*
* Comic List Item
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ComicListItem({comic}) {
  return (
    <div className="list_item col-xs-12 col-md-3">
      <Link to={`/comics/${comic.id}`}>
        <div className="list_item__inner">
          <div className="list_item__thumb">
            <div className="list_item__thumb_border"></div>
            <img className="list_item__thumb_image" src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension} `} alt=""/>
          </div>
          <div className="list_item__desc">
            <h4 className="list_item__title">{comic.title}</h4>
            {/*comic.creators.items.length > 0 && comic.creators.items
              .filter((author) => author.role === 'writer')
              .map((author) => {
                const name = author.name.split(/\s+/);
                const key = author.resourceURI.substring(author.resourceURI.lastIndexOf("/") + 1);
                return (
                  <Link to={`/creators/${key}`}><p><small key={key}>{name[name.length -1]}</small></p></Link>
                )
              }
            )*/}
          </div>
          <button className="list_item__link btn btn-primary btn-marvel"><span>View</span></button>
        </div>
      </Link>
    </div>
  );
}

ComicListItem.propTypes = {
  comic: PropTypes.object.isRequired,
};

export default ComicListItem;
