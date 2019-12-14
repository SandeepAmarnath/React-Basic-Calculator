import React, { Component } from "react";
import Display from "./Display/Display";
import Buttons from "./Buttons/Buttons";
import classes from "./Calculator.module.css";

class Calculator extends Component {
  onClickHandler = (input) => {
    console.log("Clicked ", input);
  };
  render() {
    return (
      <div className={classes.Calculator}>
        <h1
          style={{
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "1.5em",
            color: "white"
          }}
        >
          Simple Calculator
        </h1>
        <Display value="0.89" />
        <Buttons clicked={this.onClickHandler} />
      </div>
    );
  }
}

export default Calculator;
