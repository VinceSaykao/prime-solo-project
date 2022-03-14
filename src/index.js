import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

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


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
