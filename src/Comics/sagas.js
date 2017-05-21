import { put, takeLatest, select, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { 
  FETCH_COMICS_REQUESTED,
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

    const request = yield call(getApiReq, 'comics', { characters: characterIds });

    if (request.status === 200) {
      const normalisedData = normalize(request.body.data.results, [comicsSchema]);
      yield put(doFetchComicsSuccess({ byId: normalisedData.entities.comics, ids: normalisedData.result }));
    }

  } catch(e) {
    // statements
    console.log(e);
  }
} 

export default function* rootComicsSaga() {
  yield [
    takeLatest(FETCH_COMICS_REQUESTED, fetchComicsSaga),
    takeLatest(UPDATE_FILTER, fetchComicsSaga),
  ];
}
