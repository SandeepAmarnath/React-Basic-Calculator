import React, { Fragment } from "react";
import classes from "./Button.module.css";

const button = (props) => {
  const cssProps = [classes.ColorIt];
  if (props.erase) {
    cssProps.push(classes.erase);
  }
  if (props.operation) {
    cssProps.push(classes.operation);
  }

  if (props.get) {
    cssProps.push(classes.get);
  }
  return (
    <Fragment>
      <button
        className={cssProps.join("")}
        onClick={() => props.click(props.value)}
      >
        {props.value}
      </button>
    </Fragment>
  );
};

export default button;
