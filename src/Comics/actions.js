/**
 * Actions
 */

const GLOBAL_STATE_KEY = 'Comics';

// helper function to prefix constants with a unique name
const createAction = (name) => `app/${GLOBAL_STATE_KEY}/${name}`;

export const FETCH_COMICS_REQUESTED = createAction('FETCH_COMICS_REQUESTED');
export const FETCH_COMICS_SUCCESS = createAction('FETCH_COMICS_SUCCESS');
export const FETCH_COMICS_FAIL = createAction('FETCH_COMICS_FAIL');

export const UPDATE_FILTER = createAction('UPDATE_FILTER');

/**
 * Action Creators
 */

export const doFetchComicsRequested = () => ({
  type: FETCH_COMICS_REQUESTED,
});

export const doFetchComicsSuccess = (payload) => ({
  type: FETCH_COMICS_SUCCESS,
  payload
});
export const doFetchComicsFail = (payload) => ({
  type: FETCH_COMICS_FAIL,
  payload
});

export const doUpdateComicsFilter = (payload) => ({
  type: UPDATE_FILTER,
  payload
});
