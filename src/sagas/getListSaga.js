import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { GET_LIST, setList } from '../actions'

function* getListSaga() {
    const { data: { results }} = yield call(axios.get, 'https://swapi.dev/api/people')
    yield put(setList(results))
}

export function* watchGetCharactersListSaga() {
    yield takeLatest(GET_LIST, getListSaga);
}
