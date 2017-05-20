/**
*
* Loader
*
*/

import React from 'react';

function Loader() {
  return (
    <div className="loader">
      <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      <span className="sr-only">...loading</span>
    </div>
  );
}

Loader.propTypes = {

};

export default Loader;
