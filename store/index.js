import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { appReducer } from "./reducers/appReducer";
import { ajax } from "rxjs/ajax";

import { combineEpics, createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducers";

// import { searchBeersEpic } from "./epics/fetchBeers";
// import { beersReducer } from "./reducers/beersReducer";
// import { configReducer } from "./reducers/configReducer";
// import { persistEpic, hydrateEpic } from "./epics/persist";

export function configureStore() {
  const rootEpic = combineEpics();

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      getJSON: ajax.getJSON
    }
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
