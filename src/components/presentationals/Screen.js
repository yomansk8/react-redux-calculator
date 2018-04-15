import React from "react";
import PropTypes from "prop-types";
import "./Screen.css";

class Screen extends React.Component {
  prettifyExpression = expression =>
    expression
      .replace(/\./g, ",")
      .replace(/\*/g, "×")
      .replace(/\//g, "÷");

  render() {
    const { expression, result } = this.props;
    return (
      <div className="calculator-screen">
        <div className="calculator-screen-line1 slide-top">{this.prettifyExpression(expression)}</div>
        <div className="calculator-screen-line2 slide-top">{this.prettifyExpression(result)}</div>
      </div>
    );
  }
}

Screen.propTypes = {
  expression: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
};

export default Screen;
