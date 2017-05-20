import {
  FETCH_COMICS_REQUESTED,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_FAIL,
} from './actions';

const initialState = {
  byId: {},
  ids: [],
  filter: {},
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMICS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_COMICS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      }
    case FETCH_COMICS_FAIL:
    default:
      return state;
  }
}