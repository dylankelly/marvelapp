/**
*
* Comic List Item
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

function ComicListItem({comic}) {
  return (
    <div className="comic_list_item col-xs-12 col-md-3">
      <Link to={`/comics/${comic.id}`}>
        <div className="comic_list_item__inner">
          <div className="comic_list_item__thumb">
            <div className="comic_list_item__thumb_border"></div>
            <img className="comic_list_item__thumb_image" src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension} `} alt=""/>
          </div>
          <div className="comic_list_item__desc">
            <h4 className="comic_list_item__title">{comic.title}</h4>
            {comic.creators.items.length > 0 && comic.creators.items
              .filter((author) => author.role === 'writer')
              .map((author) => {
                const name = author.name.split(/\s+/);
                const key = author.resourceURI.substring(author.resourceURI.lastIndexOf("/") + 1);
                return (
                  <Link to={`/creators/${key}`}><p><small key={key}>{name[name.length -1]}</small></p></Link>
                )
              }
            )}
            <a href="#" className="comic_list_item__link btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Link>
    </div>
  );
}

ComicListItem.propTypes = {

};

export default ComicListItem;
