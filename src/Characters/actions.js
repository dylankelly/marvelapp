/**
 * Actions
 */

const GLOBAL_STATE_KEY = 'Characters';

// helper function to prefix constants with a unique name
const createAction = (name) => `app/${GLOBAL_STATE_KEY}/${name}`;

export const FETCH_CHARACTERS_REQUESTED = createAction('FETCH_CHARACTERS_REQUESTED');
export const FETCH_CHARACTERS_SUCCESS = createAction('FETCH_CHARACTERS_SUCCESS');
export const FETCH_CHARACTERS_FAIL = createAction('FETCH_CHARACTERS_FAIL');

export const FETCH_CHARACTER_REQUESTED = createAction('FETCH_CHARACTER_REQUESTED');
export const FETCH_CHARACTER_SUCCESS = createAction('FETCH_CHARACTER_SUCCESS');
export const FETCH_CHARACTER_FAIL = createAction('FETCH_CHARACTER_FAIL');

export const UPDATE_FILTER = createAction('UPDATE_FILTER');

export const FETCH_COMIC_CHARACTERS_REQUESTED = createAction('FETCH_COMIC_CHARACTERS_REQUESTED');



/**
 * Action Creators
 */

export const doFetchCharactersRequested = () => ({
  type: FETCH_CHARACTERS_REQUESTED,
});

export const doFetchComicCharactersRequested = (payload) => ({
  type: FETCH_COMIC_CHARACTERS_REQUESTED,
  payload
});

export const doFetchCharactersSuccess = (payload) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload
});
export const doFetchCharactersFail = (payload) => ({
  type: FETCH_CHARACTERS_FAIL,
  payload
});


export const doFetchCharacterRequested = (payload) => ({
  type: FETCH_CHARACTER_REQUESTED,
  payload
});

export const doFetchCharacterSuccess = (payload) => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload
});
export const doFetchCharacterFail = (payload) => ({
  type: FETCH_CHARACTER_FAIL,
  payload
});