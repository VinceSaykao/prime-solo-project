import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateTimesheet(action) {
    console.log('In update timesheet, action.payload is:', action.payload);
    try {
        yield axios.put(`/api/timesheet/${action.payload.id}`, action.payload);
    } catch (error) {
        console.log('Error updating timesheet', error);
    }
    yield put({ type: 'FETCH_TIMESHEET' })
}

function* updateTimesheetSaga() {
    yield takeEvery('UPDATE_TIMESHEET', updateTimesheet);
}


export default updateTimesheetSaga;