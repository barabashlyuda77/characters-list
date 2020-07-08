import React from 'react'
import { useDrag } from 'react-dnd'

import { DraggableTypes } from '../../helpers'
import LinkButton from '../../components/LinkButton/LinkButton'
import './Character.scss'

const Character = ({ character }) => {
  const [, drag] = useDrag({
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
