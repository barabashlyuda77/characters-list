import { all } from 'redux-saga/effects'
import { watchGetCharactersListSaga } from './getListSaga'
import { watchGetDetailsSaga } from './getDetailsSaga'

export default function* rootSaga() {
    yield all([
        watchGetCharactersListSaga(),
        watchGetDetailsSaga(),
    ])
  }
