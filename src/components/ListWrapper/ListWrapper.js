import React from "react";

import List from "../List/List";
import Filters from "../Filters/Filters";

const ListWrapper = ({ list, changeHandler, loading }) => {
  return (
    <div>
      <Filters changeHandler={changeHandler} />
      <List list={list} loading={loading} />
    </div>
  );
};

export default ListWrapper;
