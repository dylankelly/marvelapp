import { put, takeLatest, select, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { 
  FETCH_CHARACTERS_REQUESTED,
  doFetchCharactersSuccess,
} from './actions';
import getApiReq from './../API';
import charactersSchema from './schema';
import { charactersfilter } from './selectors';

export function* fetchCharactersSaga(action) {
  try {
    
    const filter = yield select(charactersfilter);

    const params = {
      nameStartsWith: filter.search,
    }

    const request = yield call(getApiReq, 'characters', params);

    if (request.status === 200) {
      const normalisedData = normalize(request.body.data.results, [charactersSchema]);
      yield put(doFetchCharactersSuccess({ byId: normalisedData.entities.characters, ids: normalisedData.result }));
    }

  } catch(e) {
    // statements
    console.log(e);
  }
} 

export default function* rootComicsSaga() {
  yield [
    takeLatest(FETCH_CHARACTERS_REQUESTED, fetchCharactersSaga),
  ];
}
