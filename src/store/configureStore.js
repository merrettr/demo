import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducer, { sagas } from '../modules';

export default initialState => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
    routerMiddleware(browserHistory)
  ];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
  }

  const store = createStore(
    combineReducers({
      ...reducer,
      routing,
    }),
    initialState,
    applyMiddleware(...middleware)
  );

  sagaMiddleware.run(sagas);

  return store;
}