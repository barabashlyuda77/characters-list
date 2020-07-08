import React from 'react'
import TextField from '@material-ui/core/TextField'

import './Filters.scss'

const Filters = ({ changeHandler }) => {
  return (
    <div className="filters-wrapper">
      <TextField
        label="Movie"
        variant="outlined"
        size="small"
        onChange={changeHandler}
        name="films"
      />
      <TextField label="Species" variant="outlined" size="small" name="species" onChange={changeHandler} />
      <TextField label="Birth from" variant="outlined" onChange={changeHandler} size="small" name="birthYearFrom"/>
      <TextField label="Birth to" variant="outlined" onChange={changeHandler} size="small" name="birthYearTo" />
    </div>
  );
}

export default Filters
