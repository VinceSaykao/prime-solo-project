import axios from 'axios';
import { put } from 'redux-saga/effects';


// generator saga function: will be fired on "FETCH_TIMESHEET" actions
export default function* fetchTimesheet() {
    try {
        const response = yield axios.get('/api/timesheet');
        yield put({type: 'SET_TIMESHEET', payload: response.data}); 
    } catch(error) {
        console.log('error fetching timesheet', error);
    }

}; // end of fetchTimesheet