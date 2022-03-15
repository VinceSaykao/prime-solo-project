import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// delete saga
function* DeleteTimesheetSaga(action) {
    try {
        yield axios.delete(`/api/timesheet/${action.payload}`)
    } catch (error) {
    }
    yield put ({type: 'FETCH_TIMESHEET'});
}

// delete watcher saga
export default function* DeleteTimesheetWatcherSaga() {
    yield takeEvery('DELETE_TIMESHEET', DeleteTimesheetSaga);
}