import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable';
// import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'

import rootReducer from './root-reducer'
import rootEpic from './root-epic'

const logger = createLogger();
const epicMiddleware = createEpicMiddleware();

let middlewares =  [epicMiddleware, logger];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware, logger)
      )
  );

  epicMiddleware.run(rootEpic);

  return store;
}
