import React, { Component } from "react";
import "./App.css";
import Validate from "./components/ValidationForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Validate />
      </div>
    );
  }
}

export default App;
