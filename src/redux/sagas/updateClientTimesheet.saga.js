import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateClientTimesheet(action) {
    console.log('In update client timesheet, action.payload is:', action.payload);
    try {
        yield axios.put(`/api/timesheet/clienttimesheet/${action.payload.id}`, action.payload);
    } catch (error) {
        console.log('Error updating timesheet', error);
    }
    yield put({ type: 'FETCH_UPDATE_CLIENT_TIMESHEET' })
}

function* updateClientTimesheetSaga() {
    yield takeEvery('UPDATE_CLIENT_TIMESHEET', updateClientTimesheet);
}


export default updateClientTimesheetSaga;