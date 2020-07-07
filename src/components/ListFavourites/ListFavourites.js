import React from 'react'
import { useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux'

import { addToFavourites } from '../../actions'
import { DraggableTypes } from '../../helpers'
import { favouritesSelector } from '../../selectors'
import './ListFavourites.scss'

const ListFavourites = () => {
  const dispatch = useDispatch()
  const favourites = useSelector(favouritesSelector)
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DraggableTypes.CHARACTER,
    drop: (character) =>  dispatch(addToFavourites(character)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  return (
    <div ref={drop} className="favourites-list">
      {favourites.map(character => (
        <p key={character.name}>{character.name}</p>
      ))}
    </div>
  );
}

export default ListFavourites
