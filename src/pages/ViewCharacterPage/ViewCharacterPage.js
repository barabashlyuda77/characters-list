import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import LinkButton from "../../components/LinkButton/LinkButton";
import BackArrow from "../../image/back-arrow.png";
import "./ViewCharacterPage.scss";

const ViewCharacterPage = () => {
  const { id: characterId } = useParams();
  const {
    name,
    films,
    species,
    starships,
  } = useSelector(({ charactersList }) =>
    charactersList.find((item) => item.name === characterId)
  );

  return (
    <div className="details-page-wrapper">
      <div>
        <LinkButton to={`/`}>
          <img src={BackArrow} alt="Back" className="back-image" />
        </LinkButton>
      </div>
      <h1>Character Details</h1>
      <div className="details-wrapper">
        <p>{`Name: ${name}`}</p>
        <p>{`Species: ${species.join(", ")}`}</p>
        <p>{`Movies: ${films.join(", ")}`}</p>
        <p>{`Spaceships: ${starships.join(", ")}`}</p>
      </div>
    </div>
  );
};

export default ViewCharacterPage;
