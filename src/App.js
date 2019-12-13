import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Buttons from "./components/Buttons/Buttons";

class App extends Component {
  onClickHandler = (value) => {
    console.log("clicked " + value);
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Calculator</h1>
        <Display value="0.89" />
        <Buttons clicked={this.onClickHandler} />
      </div>
    );
  }
}

export default App;
