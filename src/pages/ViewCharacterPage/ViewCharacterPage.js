import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { detailsListSelector } from '../../selectors'
import { getDetails } from '../../actions'
import LinkButton from '../../components/LinkButton/LinkButton'
import Progress from '../../components/Progress/Progress'
import './ViewCharacterPage.scss'

const ViewCharacterPage = () => {
  const dispatch = useDispatch()
  const { id: characterId } = useParams()
  const character = useSelector(({ charactersList }) => charactersList.find(item => item.name === characterId))
  const { movies, species, spaceships } = useSelector(detailsListSelector);
  const item = useSelector(detailsListSelector);
  console.log('item', item);

  useEffect(() => {
    dispatch(getDetails(character))
  }, [dispatch, character])

  if (species.length === 0 && movies.length === 0 && spaceships.length === 0) {
    return <Progress />
  }

  return (
    <>
      <div>
        <LinkButton to={`/`}>Back</LinkButton>
      </div>
      <h1>Character Details</h1>
      <div className="details-wrapper">
        <p>{`Name: ${character.name}`}</p>
        <p>{`Species: ${species.join(', ')}`}</p>
        <p>{`Movies: ${movies.join(', ')}`}</p>
        <p>{`Spaceships: ${spaceships.join(', ')}`}</p>
      </div>
    </>
  );
}

export default ViewCharacterPage
