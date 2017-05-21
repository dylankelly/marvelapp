import { put, takeLatest, select, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { 
  FETCH_CHARACTERS_REQUESTED,
  FETCH_CHARACTER_REQUESTED,
  FETCH_COMIC_CHARACTERS_REQUESTED,
  doFetchCharactersSuccess,
} from './actions';
import getApiReq from './../API';
import charactersSchema from './schema';
import { charactersfilter } from './selectors';

export function* fetchCharactersSaga(action) {
  try {
    
    const filter = yield select(charactersfilter);

    const params = {}
    
    if (filter.search) {
      params.nameStartsWith = filter.search;
    }

    const request = yield call(getApiReq, 'characters', params);

    if (request.status === 200) {
      const normalisedData = normalize(request.body.data.results, [charactersSchema]);
      yield put(doFetchCharactersSuccess({ byId: normalisedData.entities.characters, ids: normalisedData.result }));
    }

  } catch(e) {
    // TODO: dispatch a fail action with error message
    console.log(e);
  }
} 

export function* fetchCharacterSaga(action) {
  try {
    
    const request = yield call(getApiReq, `characters/${action.payload}`);

    if (request.status === 200) {
      const normalisedData = normalize(request.body.data.results, [charactersSchema]);
      yield put(doFetchCharactersSuccess({ byId: normalisedData.entities.characters, ids: normalisedData.result }));
    }

  } catch(e) {
    // TODO: dispatch a fail action with error message
    console.log(e);
  }
} 

export function* fetchComicCharactersSaga(action) {
  try {
    
    const params = {
      comics: action.payload
    }

    const request = yield call(getApiReq, 'characters', params);

    if (request.status === 200) {
      const normalisedData = normalize(request.body.data.results, [charactersSchema]);
      yield put(doFetchCharactersSuccess({ byId: normalisedData.entities.characters, ids: normalisedData.result }));
    }

  } catch(e) {
    // TODO: dispatch a fail action with error message
    console.log(e);
  }
} 

export default function* rootComicsSaga() {
  yield [
    takeLatest(FETCH_CHARACTERS_REQUESTED, fetchCharactersSaga),
    takeLatest(FETCH_CHARACTER_REQUESTED, fetchCharacterSaga),
    takeLatest(FETCH_COMIC_CHARACTERS_REQUESTED, fetchComicCharactersSaga),
  ];
}
