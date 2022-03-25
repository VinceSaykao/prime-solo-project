import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchTimesheet from './fetchTimesheet.saga';
import addWatcherSaga from './addTimesheet.saga';
import updateTimesheetSaga from './updateTimesheet.saga';
import deleteTimesheetWatcherSaga from './deleteTimesheet.saga';
import fetchClientInfoSaga from './fetchClientInfo.saga';
import fetchClientTimesheetSaga from './fetchClientTimesheet.saga';
import fetchClientSheet from './fetchClientSheet.saga';
import updateClientTimesheetSaga from './updateClientTimesheet.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchTimesheet(),
    addWatcherSaga(),
    updateTimesheetSaga(),
    deleteTimesheetWatcherSaga(),
    fetchClientInfoSaga(),
    fetchClientTimesheetSaga(),
    fetchClientSheet(),
    updateClientTimesheetSaga(),
  ]);
}
