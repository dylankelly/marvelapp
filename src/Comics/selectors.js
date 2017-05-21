// import { createSelector } from 'reselect';

export const selectComics = (state) => {
  if(state.comics && state.comics.ids.length > 0){
    return state.comics.ids.map((id) => state.comics.byId[id]);
  }
  return [];
}
export const selectComicById = (state, selectedId) => state.comics.byId ? state.comics.byId[selectedId] : {};

export const comicsListLoading = (state) => state.comics.loading;

export const comicsFilter = (state) => {
  if(state.comics && state.comics.filter) {
    return state.comics.filter;
  }
  return [];
};

