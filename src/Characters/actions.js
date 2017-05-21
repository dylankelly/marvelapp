/**
 * Actions
 */

const GLOBAL_STATE_KEY = 'Characters';

// helper function to prefix constants with a unique name
const createAction = (name) => `app/${GLOBAL_STATE_KEY}/${name}`;

export const FETCH_CHARACTERS_REQUESTED = createAction('FETCH_CHARACTERS_REQUESTED');
export const FETCH_CHARACTERS_SUCCESS = createAction('FETCH_CHARACTERS_SUCCESS');
export const FETCH_CHARACTERS_FAIL = createAction('FETCH_CHARACTERS_FAIL');


/**
 * Action Creators
 */

export const doFetchCharactersRequested = () => ({
  type: FETCH_CHARACTERS_REQUESTED,
});

export const doFetchCharactersSuccess = (payload) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload
});
export const doFetchCharactersFail = (payload) => ({
  type: FETCH_CHARACTERS_FAIL,
  payload
});
