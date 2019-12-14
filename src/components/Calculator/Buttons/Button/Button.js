import React, { Fragment } from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <Fragment>
      <button
        className={classes.ColorIt}
        onClick={() => props.click(props.value)}
      >
        {props.value}
      </button>
    </Fragment>
  );
};

export default button;
