import React from 'react'

import List from '../List/List'
import './ListWrapper.scss'

const ListWrapper = ({ list }) => {
  return (
    <div className="list-wrapper">
      <div>Filters</div>
      <List list={list}/>
    </div>
  );
}

export default ListWrapper
