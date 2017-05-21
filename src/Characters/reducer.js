import {
  FETCH_CHARACTERS_REQUESTED,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL,
} from './actions';

const initialState = {
  byId: {},
  ids: [],
  filter: {
    search: 'storm'
  },
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      }
    case FETCH_CHARACTERS_FAIL:
    default:
      return state;
  }
}