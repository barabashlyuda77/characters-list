import React from "react";

import DeleteImage from "../../image/delete.png";
import "./FavouriteCharacter.scss";

const FavouriteCharacter = ({ name, handleRemove }) => {
  return (
    <div className="favourite-character">
      <div className="name">{name}</div>
      <div className="delete" onClick={handleRemove}>
        <img src={DeleteImage} alt="Remove" />
      </div>
    </div>
  );
};

export default FavouriteCharacter;
