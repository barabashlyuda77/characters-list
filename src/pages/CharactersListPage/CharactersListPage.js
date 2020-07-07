import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { listSelector} from '../../selectors'
import { getList } from '../../actions'
import ListWrapper from '../../components/ListWrapper/ListWrapper.js'
import './CharactersListPage.scss'

const CharactersListPage = () => {
  const charactersList = useSelector(listSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  return (
    <>
      <h1>Characters List</h1>
      <div>Filters</div>
      <ListWrapper list={charactersList}/>
    </>
  );
}

export default CharactersListPage
