import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import "./style.scss";

const Spinner = () => (
  <div className="spinner">
    <CircularProgress />
    <Typography component="h1" variant="h5">
      Loading...
    </Typography>
  </div>
);

export default Spinner;
