const initialState = {
  movies: [],
  species: [],
  spaceships: [],
  favourites: [],
  charactersList: [],
  loading: false,
  filteredCharacters: [],
  filters: {
    films: null,
    species: null,
    birthYearFrom: null,
    birthYearTo: null
  }
};

const isIncludes = (item, searchText) => item.toLowerCase().includes(searchText.toLowerCase())

const filterByFilms = (characters, filmName) => {
  if (filmName === null) {
    return characters
  }
  return characters.filter(
    character => character.films.find(
      film => film.toLowerCase().includes(filmName.toLowerCase())
    )
  )
}

const filterBySpecies = (characters, speciesName) => {
  if (speciesName === null) {
    return characters
  }
  return characters.filter(
    item => item.species.find(
      species => species.toLowerCase().includes(speciesName.toLowerCase())
    )
  )
}

const filterByBirthYearFrom = (characters, birthYearFrom) => {
  return birthYearFrom === null
    ? characters
    : characters.filter(item => item.birth_year >= Number(birthYearFrom))
}

const filterByBirthYearTo = (characters, birthYearTo) => {
  return birthYearTo === null
    ? characters
    : characters.filter(item => item.birth_year <= Number(birthYearTo))
}


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LIST':
        return {
          ...state,
          charactersList: action.payload,
          filteredCharacters: action.payload,
        }
      case 'SET_DETAILS':
        return {
          ...state,
          movies: action.payload.movies,
          species: action.payload.species,
          spaceships: action.payload.spaceships,
         }
       case 'ADD_FAVOURITES':
         return {
           ...state,
           favourites: [...state.favourites, action.payload.character]
         }
       case 'REMOVE_FROM_FAVOURITES':
         return {
           ...state,
           favourites: state.favourites.filter(({ name }) => name !== action.payload)
         }
       case 'FILTER':
        const filteredCharacters = filterByFilms(
          filterBySpecies(
            filterByBirthYearFrom(
              filterByBirthYearTo(
                state.charactersList, state.filters.birthYearTo
              ),
              state.filters.birthYearFrom
            ),
            state.filters.species
          ), state.filters.films
        )
        return {
           ...state,
           filteredCharacters

        }
       case 'SET_FILTER':
        return {
           ...state,
           filters: {
             ...state.filters,
             [action.payload.fieldName]: action.payload.searchText === '' ? null : action.payload.searchText
           }
        }
       case 'SET_LOADING':
         return {
           ...state,
           loading: action.payload.isLoading
         }
       case 'RESET_LIST':
         return {
           ...state,
           filteredCharacters: [ ...state.charactersList ]
         }
      default:
        return state
    }
  }
