const initialState = [];

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LIST':
        return action.payload
      default:
        return state
    }
  }
