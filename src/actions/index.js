export const SET_LIST = 'SET_LIST'
export const GET_LIST = 'GET_LIST'
export const GET_DETAILS = 'GET_DETAILS'
export const SET_DETAILS = 'SET_DETAILS'
export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const FILTER = 'FILTER'
export const SET_FILTER = 'SET_FILTER'
export const SET_LOADING = 'SET_LOADING'
export const RESET_LIST = 'RESET_LIST'

export const getList = () => ({
  type: 'GET_LIST'
})

export const setList = list => ({
    type: 'SET_LIST',
    payload: list
})

export const resetList = () => ({
    type: 'RESET_LIST'
})

export const getDetails = character => ({
  type: 'GET_DETAILS',
  payload: character
})

export const setDetails = details => ({
  type: 'SET_DETAILS',
  payload: details
})

export const addToFavourites = character => ({
  type: 'ADD_FAVOURITES',
  payload: character
})

export const removeFromFavourites = name => ({
  type: 'REMOVE_FROM_FAVOURITES',
  payload: name
})

export const filterData = () => ({
  type: 'FILTER'
})

export const setFilter = (searchText, fieldName) => ({
  type: 'SET_FILTER',
  payload: { searchText, fieldName }
})

export const setLoading = isLoading => ({
  type: 'SET_LOADING',
  payload: { isLoading }
})
