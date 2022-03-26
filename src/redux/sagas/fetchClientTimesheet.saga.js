import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';



function* fetchClientTimesheet(action) {
    try {
        console.log('inside clientimesheet', action.payload)
        const response = yield axios.get(`/api/timesheet/clienttimesheet/${action.payload}`);
        yield put({ type: 'SET_CLIENT_TIMESHEET', payload: response.data });
    } catch (error) {
        console.log('error fetching timesheet', error);
    }




}; // end of fetchTimesheet

// watcher root saga
export default function* FetchClientTimesheetSaga() {
    yield takeEvery('FETCH_CLIENT_TIMESHEET', fetchClientTimesheet);
}; // end of rootSaga