export const listSelector = state => state.charactersList
export const detailsListSelector = ({ movies, species, spaceships }) => ({ movies, species, spaceships })
export const favouritesSelector = state => state.favourites
