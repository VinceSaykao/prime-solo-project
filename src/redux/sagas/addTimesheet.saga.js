import axios from "axios";
import { put } from "redux-saga/effects";

export default function* addTimesheet() {
    try {
        yield axios.post('/api/timesheet', action.payload);
        yield put({type: 'FETCH_TIMESHEET'});

    } catch(error) {
        console.log('posting in addtimesheet error', error);
    }
}; // end of addTimesheet