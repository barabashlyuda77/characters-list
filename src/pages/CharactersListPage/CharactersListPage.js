import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { listSelector} from '../../selectors'
import { getList } from '../../actions'
import ListWrapper from '../../components/ListWrapper/ListWrapper'
import ListFavourites from '../../components/ListFavourites/ListFavourites'
import Progress from '../../components/Progress/Progress'
import './CharactersListPage.scss'

const CharactersListPage = () => {
  const charactersList = useSelector(listSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  if (charactersList.length === 0) {
    return <Progress />
  }

  return (
    <div className="characters-list-page">
      <ListFavourites />
      <ListWrapper list={charactersList}/>
    </div>
  );
}

export default CharactersListPage
