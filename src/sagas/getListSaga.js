import { takeLatest, call, put, all, select } from "redux-saga/effects";
import axios from "axios";

import { GET_LIST, setList, setLoading } from "../actions";
import {
  getEndpointsList,
  injectMoviesIntoCharacters,
  injectSpeciesIntoCharacters,
  injectStarshipsIntoCharacters,
  transformBirthYears,
  getNamesFromUrls,
  getTitlesFromUrls,
} from "./helpers.js";

function* getMovies() {
  const {
    data: { results: movies },
  } = yield call(axios.get, "https://swapi.dev/api/films/");

  return getTitlesFromUrls(movies);
}

function* getSpecies() {
  const {
    data: { count },
  } = yield call(axios.get, "https://swapi.dev/api/species/");

  const urlList = getEndpointsList(count, "https://swapi.dev/api/species");
  const speciesPages = yield all(urlList.map((url) => call(axios.get, url)));
  const speciesList = speciesPages.map((page) => page.data.results).flat();

  return getNamesFromUrls(speciesList);
}

function* getStarships() {
  const {
    data: { count },
  } = yield call(axios.get, "https://swapi.dev/api/starships/");
  const urlList = getEndpointsList(count, "https://swapi.dev/api/starships");
  const starshipsPages = yield all(urlList.map((url) => call(axios.get, url)));
  const starshipsList = starshipsPages.map((page) => page.data.results).flat();

  return getNamesFromUrls(starshipsList);
}

function* getList(source) {
  const {
    data: { count },
  } = yield call(axios.get, `https://swapi.dev/api/${source}`);

  const endpointsList = getEndpointsList(
    count,
    `https://swapi.dev/api/${source}`
  );
  const charactersPages = yield all(
    endpointsList.map((url) => call(axios.get, url))
  );
  const characters = charactersPages.map((page) => page.data.results).flat();

  return characters;
}

function* getListSaga() {
  const { charactersList } = yield select();

  if (charactersList.length === 0) {
    yield put(setLoading(true));
    const movieTitlesByUrl = yield call(getMovies);
    const speciesNamesByUrl = yield call(getSpecies);
    const starshipsNamesByUrl = yield call(getStarships);

    const characters = transformBirthYears(
      injectSpeciesIntoCharacters(
        injectMoviesIntoCharacters(
          injectStarshipsIntoCharacters(
            yield call(getList, "people"),
            starshipsNamesByUrl
          ),
          movieTitlesByUrl
        ),
        speciesNamesByUrl
      )
    );

    yield put(setList(characters));
    yield put(setLoading(false));
  }
}

export function* watchGetCharactersListSaga() {
  yield takeLatest(GET_LIST, getListSaga);
}
