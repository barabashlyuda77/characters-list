import React from 'react'
import { useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux'

import { addToFavourites, removeFromFavourites } from '../../actions'
import { DraggableTypes, isFavourite } from '../../helpers'
import { favouritesSelector } from '../../selectors'
import FavouriteCharacter from '../FavouriteCharacter/FavouriteCharacter'
import './ListFavourites.scss'

const ListFavourites = () => {
  const dispatch = useDispatch()
  const favourites = useSelector(favouritesSelector)

  const [{ isOver }, drop] = useDrop({
    accept: DraggableTypes.CHARACTER,
    // TODO how to make better
    drop: (character) =>  isFavourite(character, favourites) ?  undefined : dispatch(addToFavourites(character)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  return (
    <div className="favourites-list-wrapper">
      <div className="header-wrapper">
        <p>Favoutites</p>
      </div>
      <div ref={drop} className="list-container" style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
        {favourites.length === 0 ?
          (<div className="dnd-img-wrapper">
            <img src="drag-and-drop.png" alt="Drop character"/>
            {isOver && (
            <div className="is-over"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                opacity: 0.5,
                backgroundColor: '#f2f2f2',
              }}
            />
          )}
          </div>)
          : (
            <div className="favourites-list-container">
              {favourites.map(({ name }) => (
                <FavouriteCharacter name={name} key={name} handleRemove={() => dispatch(removeFromFavourites(name))}/>

              ))}
              {isOver && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  opacity: 0.5,
                  backgroundColor: '#f2f2f2',
                }}
              />
            )}
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ListFavourites
