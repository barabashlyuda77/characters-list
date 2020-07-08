import React from 'react'
import TextField from '@material-ui/core/TextField'

import './Filters.scss'

const Filters = ({ changeHandler }) => {
  return (
    <div className="filters-wrapper">
      <TextField label="Movie" variant="outlined" size="small" onChange={changeHandler} name="movie"/>
      <TextField label="Species" variant="outlined" size="small"/>
      <TextField label="Birth from" variant="outlined" size="small"/>
      <TextField label="Birth to" variant="outlined" size="small"/>
    </div>
  );
}

export default Filters
