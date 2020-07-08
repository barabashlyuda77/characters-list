export const DraggableTypes = {
  CHARACTER: 'character'
}

export const isFavourite = ({ character }, favouritesList) => {
  return favouritesList.map(({ name }) => name).includes(character.name)
}
