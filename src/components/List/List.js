import React from 'react'

import Character from '../../components/Character/Character'
import Progress from '../../components/Progress/Progress'
import './List.scss'

const List = ({ list, loading }) => {

  if (loading) {
    return <Progress />
  }

  return (
    <div className="full-list">
      {list.map((character) => (
        <Character character={character} key={character.name} />
      ))}
    </div>
  );
}

export default List
