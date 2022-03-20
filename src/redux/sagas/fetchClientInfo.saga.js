import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// generator saga function: will be fired on "FETCH_TIMESHEET" actions
function* fetchClientInfo() {
    try {
        const response = yield axios.get('/api/client');
        yield put({type: 'SET_CLIENT_INFO', payload: response.data}); 
    } catch(error) {
        console.log('error fetching timesheet', error);
    }




}; // end of fetchTimesheet

// watcher root saga
export default function* rootClientSaga() {
yield takeEvery('FETCH_CLIENT', fetchClientInfo);
}; // end of rootSaga