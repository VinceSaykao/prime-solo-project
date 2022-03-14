import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import store from './redux/store';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import App from './components/App/App';
import { takeEvery } from 'redux-saga/effects';

// RootSaga 
function* rootSaga() {
  yield takeEvery('FETCH_TIMESHEET', fetchTimesheet);
}; // end of rootSaga


// fetchTimesheet Reducer
const timesheetReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TIMESHEET':
      return action.payload;
    default:
      return state;
  }
}; // end of timesheet Reducer

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
      timesheetReducer,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
