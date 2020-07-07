import React from 'react'
import { Link } from 'react-router-dom'

import LinkButton from '../../components/link-button/LinkButton'
import './List.scss'

const List = ({ list }) => {

  return (
    <div className="full-list">
      {list.map(({ id, name }) => (
        <div className="item" key={name}>
          <LinkButton to={`/details/${name}`}>{name}</LinkButton>
        </div>
      ))}
    </div>
  );
}

export default List
