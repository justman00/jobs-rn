import { createStore, applyMiddleware, compose } from "redux";
import { ajax } from "rxjs/ajax";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducers";
import { authEpic } from "../epics/authEpics";

// import { searchBeersEpic } from "./epics/fetchBeers";
// import { beersReducer } from "./reducers/beersReducer";
// import { configReducer } from "./reducers/configReducer";
// import { persistEpic, hydrateEpic } from "./epics/persist";

export function configureStore() {
  const rootEpic = combineEpics(authEpic);

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
