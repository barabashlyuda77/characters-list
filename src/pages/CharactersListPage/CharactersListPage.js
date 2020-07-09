import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listSelector, loadingSelector } from "../../selectors";
import { getList, filterData, resetList, setFilter } from "../../actions";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import ListFavourites from "../../components/ListFavourites/ListFavourites";
import "./CharactersListPage.scss";

const CharactersListPage = () => {
  const charactersList = useSelector(listSelector);
  const isLoading = useSelector(loadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const changeHandler = (e) => {
    if (e.target.value.length === 0) {
      dispatch(resetList());
    }

    dispatch(setFilter(e.target.value, e.target.name));
    dispatch(filterData());
  };
  return (
    <div className="characters-list-page">
      <ListFavourites />
      <ListWrapper
        list={charactersList}
        changeHandler={changeHandler}
        loading={isLoading}
      />
    </div>
  );
};

export default CharactersListPage;
