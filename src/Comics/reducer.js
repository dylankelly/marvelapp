import {
  FETCH_COMICS_REQUESTED,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_FAIL,
  UPDATE_FILTER,
} from './actions';

const initialState = {
  byId: {},
  ids: [],
  filter: {
    characters: [
      { label: 'Storm', value: 1009629 },
    ],
  },
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        loading: true,
        filter: {
          ...state.filter,
          characters: [...action.payload],
        },
      }
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