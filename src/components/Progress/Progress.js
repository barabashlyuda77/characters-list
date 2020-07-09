import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Progress.scss";

const Progress = () => {
  return (
    <div className="circular-progress">
      <CircularProgress />
    </div>
  );
};

export default Progress;
