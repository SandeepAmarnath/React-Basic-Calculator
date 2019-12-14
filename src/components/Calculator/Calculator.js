import React, { Component } from "react";
import Display from "./Display/Display";
import Buttons from "./Buttons/Buttons";
import classes from "./Calculator.module.css";

class Calculator extends Component {
  state = {
    valueOnScreen: 0
  };

  calculateString = "";

  onClickHandler = (input) => {
    if (input === "mod") {
      input = "%";
    }
    if (input === "=") {
      this.calculateString = this.calculateString.replace(/^(?!0$)0+/, "");
      let result = eval(this.calculateString);

      if (result % 1 !== 0) {
        result = result.toFixed(2);
      }
      this.calculateString = String(result);
      this.setState({ valueOnScreen: result });
    } else if (input === "AC") {
      this.calculateString = "";
      this.setState({ valueOnScreen: 0 });
    } else {
      this.calculateString = this.calculateString + input;
      this.setState({ valueOnScreen: String(this.calculateString) });
    }
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
        <Display value={this.state.valueOnScreen} />
        <Buttons clicked={this.onClickHandler} />
      </div>
    );
  }
}

export default Calculator;
