import React from 'react'
import { Link } from 'react-router-dom'

import './List.scss'

const List = ({ list }) => {

  return (
    <div className="full-list">
      {list.map(({ id, name }) => (
        <div className="item" key={id}>
          <Link to={`/details/${id}`}>{name}</Link>
        </div>
      ))}
    </div>
  );
}

export default List
