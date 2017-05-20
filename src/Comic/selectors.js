import { createSelector } from 'reselect';


export const selectComics = (state) => {
  if(state.comics && state.comics.ids.length > 0){
    return state.comics.ids.map((id) => state.comics.byId[id]);
  }
  return [];
}