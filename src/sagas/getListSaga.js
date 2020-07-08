import { takeLatest, call, put, all } from 'redux-saga/effects'
import axios from 'axios'

import { GET_LIST, setList, setLoading } from '../actions'

const ITEMS_PER_PAGE = 10

function* getMovies() {
  const { data: { results: movies }} = yield call(
    axios.get,
    'https://swapi.dev/api/films/'
  )
  const movieTitlesByUrl = movies.reduce((acc, movie) => {
    acc[movie.url] = movie.title
    return acc
  }, {})

  return movieTitlesByUrl
}

function* getSpecies() {
  const { data: { count }} = yield call(
    axios.get,
    'https://swapi.dev/api/species/'
  )
  const pagesAmount = Math.ceil(count/ITEMS_PER_PAGE)

  const urlList = []
  for (let i = 1; i <= pagesAmount; i++) {
    urlList.push(`https://swapi.dev/api/species/?page=${i}`)
  }

  const speciesPages = yield all(urlList.map(url => call(axios.get, url)))
  const speciesList = speciesPages.map(page => page.data.results).flat()

  const speciesNamesByUrl = speciesList.reduce((acc, item) => {
    acc[item.url] = item.name
    return acc
  }, {})

  return speciesNamesByUrl
}

function* getCharacters() {
  const { data: { count }} = yield call(axios.get, 'https://swapi.dev/api/people')
  const pagesNumber = Math.ceil(count/ITEMS_PER_PAGE);

  let characters = [];

  for (let i = 1; i <= pagesNumber; i++) {
    const { data: { results }} = yield call(
      axios.get,
      `https://swapi.dev/api/people/?page=${i}`
    )
    characters = [...characters, ...results]
  }

  return characters
}

const injectMoviesIntoCharacters = (characters, movieTitlesByUrl) => {
  return characters.map(character => ({
    ...character,
    films: character.films.map(filmUrl => movieTitlesByUrl[filmUrl])
  }))
}

const injectSpeciesIntoCharacters = (characters, speciesByUrl) => {
  return characters.map(character => ({
    ...character,
    species: character.species.map(url => speciesByUrl[url])
  }))
}

const transformBirthYears = characters => {
  return characters.map(character => {
    const before = character.birth_year.toLowerCase().includes('bby')
    const absBirthYear = parseInt(character.birth_year)
    const birthYear = before ? -absBirthYear : absBirthYear
    console.log('character.birth_year', character.birth_year, birthYear, character.name);
    return {
      ...character,
      birth_year: birthYear
    }
  })
}

function* getListSaga() {
  yield put(setLoading(true))
  const movieTitlesByUrl = yield call(getMovies)
  const speciesNamesByUrl = yield call(getSpecies)

  const characters = transformBirthYears(
    injectSpeciesIntoCharacters(
      injectMoviesIntoCharacters(
        yield call(getCharacters),
        movieTitlesByUrl
      ),
      speciesNamesByUrl
    )
  )

  yield put(setList(characters))
  yield put(setLoading(false))
}

export function* watchGetCharactersListSaga() {
    yield takeLatest(GET_LIST, getListSaga);
}
