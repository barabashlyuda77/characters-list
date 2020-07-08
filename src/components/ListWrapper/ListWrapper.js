import React from 'react'

import List from '../List/List'
import Filters from '../Filters/Filters'
import './ListWrapper.scss'

const ListWrapper = ({ list, changeHandler, loading }) => {
  return (
    <div className="list-wrapper">
      <Filters changeHandler={changeHandler}/>
      <List list={list} loading={loading}/>
    </div>
  );
}

export default ListWrapper
