// const initialState = [];

const initialState = {
  movies: [],
  species: [],
  spaceships: [],
  favourites: [],
  charactersList: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LIST':
        return { ...state, charactersList: action.payload}
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
      default:
        return state
    }
  }
