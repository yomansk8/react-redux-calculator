import React from "react";
import "./App.css";
import Presentation from "./components/presentationals/Presentation";
import Calculator from "./components/containers/Calculator";

class App extends React.Component {
  render() {
    console.log(this.props.generateMonkeyExpression);
    return (
      <div className="App">
        <Presentation />
        <Calculator />
      </div>
    );
  }
}

export default App;
