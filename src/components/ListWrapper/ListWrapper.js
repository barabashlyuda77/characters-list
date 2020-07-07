import React from 'react'

import List from '../List/List.js'
import './ListWrapper.scss'

const ListWrapper = ({ list }) => {

  return (
    <div className="list-wrapper">
      <div className="favourites-list">favourites</div>
      <List list={list}/>
    </div>
  );
}

export default ListWrapper
