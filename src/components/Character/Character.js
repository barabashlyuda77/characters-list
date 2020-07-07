import React from 'react'
import { useDrag } from 'react-dnd'

import { DraggableTypes } from '../../helpers'
import LinkButton from '../../components/link-button/LinkButton'
import './Character.scss'

const Character = ({ character }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableTypes.CHARACTER, character },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag}
      className="item"
    >
      <LinkButton to={`/details/${character.name}`}>{character.name}</LinkButton>
    </div>
  );
}

export default Character
