/**
 * Import all the sagas required and export as an array to be run by
 * the redux-saga middleware
 *
 * Taken from https://gist.github.com/hoschi/6538249ad079116840825e20c48f1690
 */
import { take, fork, cancel } from 'redux-saga/effects';
import rootComicsSaga from 'Comics/sagas';
import rootCharactersSaga from 'Characters/sagas';

const sagas = [
  rootComicsSaga,
  rootCharactersSaga,
];

export const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR';

function createAbortableSaga(saga) {
  if (process.env.NODE_ENV === 'development') {
    return function* main() {
      const sagaTask = yield fork(saga);

      yield take(CANCEL_SAGAS_HMR);
      yield cancel(sagaTask);
    };
  }

  return saga;
}

const SagaManager = {
  startSagas(sagaMiddleware) {
    sagas.map(createAbortableSaga).forEach((saga) => sagaMiddleware.run(saga));
  },
  cancelSagas(store) {
    store.dispatch({
      type: CANCEL_SAGAS_HMR,
    });
  },
};

export default SagaManager;
