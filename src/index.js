import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import logger from 'redux-logger';

// // Import saga middleware
// import createSagaMiddleware from 'redux-saga';

// import store from './redux/store';
// import { createStore, combineReducers, applyMiddleware } from 'redux';

// import App from './components/App/App';
// import { takeEvery, put } from 'redux-saga/effects';

// // import fetchTimesheet from './redux/sagas/fetchTimesheet.saga';

// // RootSaga 


// function* fetchTimesheet() {
//   try {
//       const response = yield axios.get('/api/timesheet');
//       yield put({type: 'SET_TIMESHEET', payload: response.data}); 
//   } catch(error) {
//       console.log('error fetching timesheet', error);
//   }
// }


// // Create sagaMiddleware
// const sagaMiddleware = createSagaMiddleware();




// // Create one store that all components can use
// const storeInstance = createStore(
//   combineReducers({
//       timesheetReducer,
//   }),
//   // Add sagaMiddleware to our store
//   applyMiddleware(sagaMiddleware, logger),
// );

// // Pass rootSaga into our sagaMiddleware
// sagaMiddleware.run(rootSaga);


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('react-root'),
// );
