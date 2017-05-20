import { put, takeLatest, select, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { 
  FETCH_COMICS_REQUESTED,
  doFetchComicsSuccess,
} from './actions';
import getApiReq from './../API';
import comicsSchema from './schema';

export function* fetchComicsSaga() {
  try {
    const request = yield call(getApiReq, 'comics');

    if (request.status === 200) {
      const normalisedData = normalize(request.body.data.results, [comicsSchema]);
      yield put(doFetchComicsSuccess({ byId: normalisedData.entities.comics, ids: normalisedData.result }));
      console.log(normalisedData);

    }

  } catch(e) {
    // statements
    console.log(e);
  }
} 

export default function* rootComicsSaga() {
  yield [
    takeLatest(FETCH_COMICS_REQUESTED, fetchComicsSaga),
  ];
}
