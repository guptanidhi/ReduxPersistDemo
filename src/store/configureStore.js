// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";

function saveToLocalStorage(state) {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

// const createStoreWithMiddleware = compose(
//   applyMiddleware(
//     thunkMiddleware,
//     promiseMiddleware({ promiseTypeSuffixes: ["LOADING", "SUCCESS", "ERROR"] })
//   ),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);

const persistedStorage = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedStorage,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default function configureStore() {
  //   const store = createStoreWithMiddleware(rootReducer);
  return store;
}
