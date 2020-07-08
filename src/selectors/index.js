export const listSelector = state => state.filteredCharacters
export const detailsListSelector = ({ movies, species, spaceships }) => ({ movies, species, spaceships })
export const favouritesSelector = state => state.favourites
export const loadingSelector = state => state.loading
