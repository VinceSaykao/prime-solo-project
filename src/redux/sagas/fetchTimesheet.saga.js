import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// generator saga function: will be fired on "FETCH_TIMESHEET" actions
function* fetchTimesheet() {
    try {
        const response = yield axios.get('/api/timesheet');
        yield put({type: 'SET_TIMESHEET', payload: response.data}); 
    } catch(error) {
        console.log('error fetching timesheet', error);
    }




}; // end of fetchTimesheet


export default function* rootSaga() {
  yield takeEvery('FETCH_TIMESHEET', fetchTimesheet);
}; // end of rootSaga