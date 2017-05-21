/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux'
import comicsReducer from './Comics/reducer';
import charactersReducer from './Characters/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our state
 * The change is necessitated by moving to react-router-redux@4
 *
 */


/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    router: routerReducer,
    comics: comicsReducer,
    characters: charactersReducer,
    ...asyncReducers,
  });
}
