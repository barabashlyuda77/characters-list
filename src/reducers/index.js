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
       console.log('action', action);
         return { ...state, favourites: [...state.favourites, action.payload.character]}
      default:
        return state
    }
  }
