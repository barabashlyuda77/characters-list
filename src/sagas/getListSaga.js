import { takeLatest, call, put, all } from 'redux-saga/effects'
import axios from 'axios'

import { GET_LIST, setList } from '../actions'

function* getListSaga({ payload }) {
    const { data: { results }} = yield call(axios.get, 'https://swapi.dev/api/people')

    // const films = [
    //   'http://swapi.dev/api/films/1/',
    //   'http://swapi.dev/api/films/1/'
    // ]
    // const filmNames = [];
    //
    // for (let film of films) {
    //   const details = yield call(axios.get, film)
    //   filmNames.push(details)
    // }

    yield put(setList(results))
}

export function* watchGetCharactersListSaga() {
    yield takeLatest(GET_LIST, getListSaga);
}
