import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// delete saga
function* DeleteClientTimesheet(action) {
    try {
        yield axios.delete(`/api/timesheet/clienttimesheet/${action.payload}`)
        yield put ({type: 'FETCH_CLIENT_TIMESHEET'});
    } catch (error) {
    }
}

// delete watcher saga
export default function* DeleteClientTimesheetSaga() {
    yield takeEvery('DELETE_CLIENT_TIMESHEET', DeleteClientTimesheet);
}