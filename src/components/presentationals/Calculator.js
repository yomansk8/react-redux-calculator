import React from "react";
import PropTypes from "prop-types";
import Screen from "./Screen";
import Keyboard from "./Keyboard";
import "./Calculator.css";

class Calculator extends React.Component {
  render() {
    const { expression, result, ...actions } = this.props;
    return (
      <div className="calculator shadow">
        <Screen expression={expression} result={result} />
        <Keyboard {...actions} />
      </div>
    );
  }
}

Calculator.propTypes = {
  expression: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  updateExpression: PropTypes.func.isRequired,
  calculateResult: PropTypes.func.isRequired,
  clearResult: PropTypes.func.isRequired
};

export default Calculator;
