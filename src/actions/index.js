export const SET_LIST = 'SET_LIST'
export const GET_LIST = 'GET_LIST'
export const GET_DETAILS = 'GET_DETAILS'
export const SET_DETAILS = 'SET_DETAILS'

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
