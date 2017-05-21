/**
*
* Comic Detail
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const writers = (creators) => creators.filter((author) => author.role === 'writer');
const coverArtists = (creators) => creators.filter((author) => author.role === 'writer');

function ComicDetail({comic}) {
  return (
    <div className="comic_detail">
      <div className="row">
        <div className="col-4">
          <div className="comic_list_item__thumb">
            <div className="comic_list_item__thumb_border"></div>
            <img className="comic_list_item__thumb_image" src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension} `} alt=""/>
          </div>
        </div>
        <div className="col-8">
          <div className="comic_detail__desc">
            <h2 className="page__title-white">{comic.title}</h2>
            <p><strong>Published : </strong> &nbsp;{moment(comic.dates[0].date).format('l')}</p>
            <p><strong>Writer : </strong> &nbsp;{comic.creators && comic.creators.items.length > 0 && writers(comic.creators.items).map((writer) => 
                  writer.name
              )}
            </p>
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
