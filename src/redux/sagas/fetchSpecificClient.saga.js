import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchSpecificClient(action) {
    console.log('GAHHHHH specific client id is saga...', action.payload);
    try {
        const response = yield axios.get(`/api/client/${action.payload}`);
        console.log('this is response', response.data)
        yield put({type: 'SET_SPECIFIC_CLIENT', payload: response.data}); 
    } catch(error) {
        console.log('error fetching Client', error);
    }

}; // end of fetchClient

// watcher root saga
export default function* rootSpecificClientSaga() {
yield takeEvery('FETCH_SPECIFIC_CLIENT', fetchSpecificClient);
}; // end of rootSaga