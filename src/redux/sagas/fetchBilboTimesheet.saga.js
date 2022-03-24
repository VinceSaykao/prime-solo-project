import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// generator saga function: will be fired on "FETCH_TIMESHEET" actions
function* fetchBilboTimesheet() {
    try {
        const response = yield axios.get('/api/timesheet/bilbo');
        yield put({ type: 'SET_BILBO_TIMESHEET', payload: response.data });
    } catch (error) {
        console.log('error fetching timesheet', error);
    }




}; // end of fetchTimesheet

// watcher root saga
export default function* FetchBilboTimesheet() {
    yield takeEvery('FETCH_BILBO_TIMESHEET', fetchBilboTimesheet);
}; // end of rootSaga