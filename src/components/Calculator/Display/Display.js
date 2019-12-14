import React from "react";
import classes from "./Display.module.css";

const display = (props) => {
  return (
    <div>
      <h3 className={classes.Display}>{props.value}</h3>
    </div>
  );
};

export default display;
