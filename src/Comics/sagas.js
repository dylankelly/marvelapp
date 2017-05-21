import { put, takeLatest, select, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { 
  FETCH_COMICS_REQUESTED,
  FETCH_COMIC_REQUESTED,
  UPDATE_FILTER,
  doFetchComicsSuccess,
} from './actions';
import getApiReq from './../API';
import comicsSchema from './schema';
import { comicsFilter } from './selectors';

export function* fetchComicsSaga() {
  try {
    const filter = yield select(comicsFilter);
    const characterIds = filter.characters.map((option) => option.value).join(',');
    const params = {};

    if (characterIds.length > 0) {
      params.characters = characterIds
    }

    if (filter.search) {
      params.titleStartsWith = filter.search;
    }

    const request = yield call(getApiReq, 'comics', params);

    if (request.status === 200) {
      const normalisedData = normalize(request.body.data.results, [comicsSchema]);
      yield put(doFetchComicsSuccess({ byId: normalisedData.entities.comics, ids: normalisedData.result }));
    }

  } catch(e) {
    // TODO: Dispatch error
    console.log(e);
  }
} 

export function* fetchComicSaga(action) {
  try {

    const request = yield call(getApiReq, `comics/${action.payload}`);

    if (request.status === 200) {
      const normalisedData = normalize(request.body.data.results, [comicsSchema]);
      yield put(doFetchComicsSuccess({ byId: normalisedData.entities.comics, ids: normalisedData.result }));
    }

  } catch(e) {
    // TODO: Dispatch error
    console.log(e);
  }
} 



export default function* rootComicsSaga() {
  yield [
    takeLatest(FETCH_COMICS_REQUESTED, fetchComicsSaga),
    takeLatest(FETCH_COMIC_REQUESTED, fetchComicSaga),
    takeLatest(UPDATE_FILTER, fetchComicsSaga),
  ];
}
