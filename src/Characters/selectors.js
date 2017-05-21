import { createSelector } from 'reselect';


export const selectCharacters = (state) => {
  if(state.characters && state.characters.ids.length > 0){
    return state.characters.ids.map((id) => state.characters.byId[id]);
  }
  return [];
}
export const selectCharacterById = (state, selectedId) => state.characters.byId ? state.characters.byId[selectedId] : [];

export const charactersListLoading = (state) => state.characters.loading;

export const charactersfilter = (state) => state.characters.filter;

