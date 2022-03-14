import axios from 'axios';
import { put } from 'redux-saga/effects';


// generator saga function: will be fired on "FETCH_TIMESHEET" actions
function* fetchTimesheet() {
    try {
        const timesheetResponse = yield axios.get('/timesheet')
        yield put({type: 'SET_TIMESHEET', payload: timesheetResponse.data}); 
    } catch(error) {
        console.log('error fetching timesheet', error);
    }

}; // end of fetchTimesheet