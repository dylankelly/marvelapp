// import { createSelector } from 'reselect';

export const selectCharacters = (state) => {
  if(state.characters && state.characters.ids.length > 0){
    return state.characters.ids.map((id) => state.characters.byId[id]);
  }
  return [];
}
export const selectCharacterById = (state, selectedId) => state.characters.byId ? state.characters.byId[selectedId] : {};

export const selectCharactersByComicId = (state, comicId) =>  {
  if (state.characters.byId && state.comics.byId) {
    const comic = state.comics.byId[comicId];
    const characterIds = comic.characters.items.map((char) => parseInt(char.resourceURI.substring(char.resourceURI.lastIndexOf("/") + 1), 10) );

    const characters = characterIds.map((id) => {
      if(state.characters.byId[id] != undefined) {
        return state.characters.byId[id]
      }
    });

    return characters;
  }
  return [];
}

export const charactersListLoading = (state) => state.characters.loading;

export const charactersfilter = (state) => state.characters.filter;


