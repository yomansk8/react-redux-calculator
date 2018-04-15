import React from "react";
import keydown from "react-keydown";
import "./App.css";
import Presentation from "./Presentation";
import Calculator from "../containers/Calculator";

class App extends React.Component {
  componentWillReceiveProps({ keydown }) {
    if (keydown.event) {
      // inspect the keydown event and decide what to do
      this.props.generateMonkeyExpression();
    }
  }
  render() {
    return (
      <div className="App">
        <Presentation />
        <Calculator />
      </div>
    );
  }
}

export default keydown("space")(App);
