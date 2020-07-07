import React from 'react'

import Character from '../../components/Character/Character'
import './List.scss'

const List = ({ list }) => {
  return (
    <div className="full-list">
      {list.map((character) => (
        <Character character={character} key={character.name} />
      ))}
    </div>
  );
}

export default List
