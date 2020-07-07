import { takeLatest, call, put, all } from 'redux-saga/effects'
import axios from 'axios'

import { GET_DETAILS, setDetails } from '../actions'

function* getDetailsSaga({ payload: { films, species, starships } }) {
    const moviesList = yield all(films.map(film => call(axios.get, film)))
    const speciesList = yield all(species.map(item => call(axios.get, item)))
    const starshipsList = yield all(starships.map(starship => call(axios.get, starship)))

    const movies = moviesList.map(({ data: { title } }) => title)
    const speciesName = speciesList.map(({ data: { name } }) => name)
    const spaceships = starshipsList.map(({ data: { name } }) => name)

    yield put(setDetails({ movies, species: speciesName, spaceships }))
}

export function* watchGetDetailsSaga() {
    yield takeLatest(GET_DETAILS, getDetailsSaga);
}
