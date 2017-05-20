/**
*
* Comic Detail
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

function ComicDetail({comic}) {
  return (
    <div className="comic_detail">
      <div className="row">
        <div className="col-xs-4">
          <div className="comic_list_item__thumb">
            <div className="comic_list_item__thumb_border"></div>
            <img className="comic_list_item__thumb_image" src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension} `} alt=""/>
          </div>
        </div>
        <div className="col-xs-8">
          <div className="comic_detail__desc">
            <h2 className="page__title-white">{comic.title}</h2>
            <p><strong>Published</strong> &nbsp;{comic.dates[0].date}</p>
            <p><strong>Rating</strong> &nbsp;{comic.dates[0].date}</p>
            <p><strong>Writer</strong> &nbsp;{comic.dates[0].date}</p>
            <p><strong>Cover Artist</strong> &nbsp;{comic.dates[0].date}</p>
            <br />
            <p>
              {comic.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ComicDetail.propTypes = {

};

export default ComicDetail;
