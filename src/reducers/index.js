import {
  filterByFilms,
  filterBySpecies,
  filterByBirthYearFrom,
  filterByBirthYearTo,
} from './helpers.js'

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

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LIST':
        return {
          ...state,
          charactersList: action.payload,
          filteredCharacters: action.payload,
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
