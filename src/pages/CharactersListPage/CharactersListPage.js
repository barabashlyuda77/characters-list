import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// import { imageListSelector} from '../../selectors'
// import { getImageList, removeImage } from '../../actions'
import './CharactersListPage.scss'

const CharactersListPage = () => {
  // const imageList = useSelector(imageListSelector)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getImageList())
  // }, [dispatch])

  return (
    <>
      <h1>CharactersListPage</h1>
    </>
  );
}

export default CharactersListPage
