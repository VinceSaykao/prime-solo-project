import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// generator saga function: will be fired on "FETCH_TIMESHEET" actions
function* fetchClientSheet(action) {
    console.log('this is action payload inside fetchclientsheet', action.payload);
    try {
        const response = yield axios.get(`/api/timesheet/clientdetails/${action.payload}`);
        console.log('this is response', response.data)
        yield put({type: 'SET_CLIENT_SHEET', payload: response.data}); 
    } catch(error) {
        console.log('error fetching Client timesheet', error);
    }

}; // end of fetchClientSheet

// watcher root saga
export default function* rootClientSheetSaga() {
yield takeEvery('FETCH_CLIENT_SHEET', fetchClientSheet);
}; // end of rootSaga