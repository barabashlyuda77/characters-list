import React from 'react'

import List from '../List/List'
import Filters from '../Filters/Filters'
import './ListWrapper.scss'

const ListWrapper = ({ list, changeHandler }) => {
  return (
    <div className="list-wrapper">
      <Filters changeHandler={changeHandler}/>
      <List list={list}/>
    </div>
  );
}

export default ListWrapper
