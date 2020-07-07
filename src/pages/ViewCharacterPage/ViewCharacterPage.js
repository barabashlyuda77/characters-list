import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import { getCharacterSelector } from '../../selectors'
import './ViewCharacterPage.scss'

const ViewCharacterPage = () => {
  const { id: characterId } = useParams();
  // const character = useSelector(state => state.find(item => item.id === characterId))

  return (
    <>
      <div>Back</div>
      <h1>Character Details</h1>
      <div className="details-wrapper">
        <p>{`Name: Han Solo`}</p>
        <p>{`Species: Human`}</p>
        <p>{`Movies: Episode IV, Episode V, Episode VI, Episode VII`}</p>
        <p>{`Spaceships: Millenium`}</p>
      </div>
    </>
  );
}

export default ViewCharacterPage
