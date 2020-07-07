import React from 'react'

import List from '../List/List'
import ListFavourites from '../ListFavourites/ListFavourites'
import './ListWrapper.scss'

const ListWrapper = ({ list }) => {

  return (
    <div className="list-wrapper">
      <ListFavourites />
      <List list={list}/>
    </div>
  );
}

export default ListWrapper
