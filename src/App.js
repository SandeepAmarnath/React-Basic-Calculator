import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";

class App extends Component {
  onClickHandler = (value) => {
    console.log("clicked" + value);
  };

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
