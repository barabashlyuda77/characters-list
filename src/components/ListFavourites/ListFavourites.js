import React from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";

import { addToFavourites, removeFromFavourites } from "../../actions";
import { DraggableTypes, isFavourite } from "../../helpers";
import { favouritesSelector } from "../../selectors";
import FavouriteCharacter from "../FavouriteCharacter/FavouriteCharacter";
import DragAndDrop from "../../image/drag-and-drop.png";
import "./ListFavourites.scss";

const ListFavourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(favouritesSelector);

  const [{ isOver }, drop] = useDrop({
    accept: DraggableTypes.CHARACTER,
    drop: (character) => {
      if (!isFavourite(character, favourites)) {
        return dispatch(addToFavourites(character));
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <div className="favourites-list-wrapper">
      <div className="header-wrapper">
        <p>Favoutites</p>
      </div>
      <div
        ref={drop}
        className="list-container"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {favourites.length === 0 ? (
          <div className="dnd-img-wrapper">
            <img src={DragAndDrop} alt="Drop character" />
            {isOver && <div className="is-over" />}
          </div>
        ) : (
          <div className="favourites-list-container">
            {favourites.map(({ name }) => (
              <FavouriteCharacter
                name={name}
                key={name}
                handleRemove={() => dispatch(removeFromFavourites(name))}
              />
            ))}
            {isOver && <div className="is-over" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListFavourites;
