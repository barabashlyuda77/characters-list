export const SET_LIST = 'SET_LIST'
export const GET_LIST = 'GET_LIST'
export const GET_DETAILS = 'GET_DETAILS'
export const SET_DETAILS = 'SET_DETAILS'
export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

export const getList = () => ({
  type: 'GET_LIST'
})

export const setList = list => ({
    type: 'SET_LIST',
    payload: list
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
