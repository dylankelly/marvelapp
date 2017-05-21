/**
*
* CharactersList
*
*/

import React from 'react';
import CharacterListItem from './CharacterListItem';
import { chunk } from 'lodash';

function CharactersList({ characters }) {
  const rows = chunk(characters, 4);

  return (
    <div className='characters_list'>
      {
         rows.map((characters, index) => 
           <div key={index} className="row">
             {characters.map((character) => character ? <CharacterListItem key={character.id} character={character} /> : <div>...loading</div> )}
           </div>
         )
       }
    </div>
  );
}

CharactersList.propTypes = {

};

export default CharactersList;
