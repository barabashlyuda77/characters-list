// export const ADD_IMAGE = 'ADD_IMAGE'
// export const UPDATE_IMAGE = 'UPDATE_IMAGE'
// export const REMOVE_IMAGE = 'REMOVE_IMAGE'
export const SET_LIST = 'SET_LIST'
export const GET_LIST = 'GET_LIST'

export const getList = () => ({
  type: 'GET_LIST'
})

export const setList = list => ({
    type: 'SET_LIST',
    payload: list
})
//
// export const addImage = image => ({
//     type: 'ADD_IMAGE',
//     payload: image
// })
//
// export const removeImage = imageId => ({
//     type: 'REMOVE_IMAGE',
//     payload: { imageId }
// })
//
// export const updateImage = (imageId, image) => ({
//     type: 'UPDATE_IMAGE',
//     payload: {
//         imageId,
//         image,
//     }
// })
//
