import React from "react";
import PropTypes from "prop-types";
import NumericButton from "./Buttons/NumericButton";
import OperandButton from "./Buttons/OperandButton";
import ClearButton from "./Buttons/ClearButton";
import EqualButton from "./Buttons/EqualButton";
import "./Keyboard.css";

class Keyboard extends React.Component {
  render() {
    const { updateExpression, calculateResult, clearResult } = this.props;
    return (
      <div className="calculator-keyboard">
        <div className="calculator-keyboard-line margin-bottom-25">
          <NumericButton onClick={updateExpression} value="7" text="7" />
          <NumericButton onClick={updateExpression} value="8" text="8" />
          <NumericButton onClick={updateExpression} value="9" text="9" />
          <OperandButton onClick={updateExpression} value="/" text="÷" />
        </div>
        <div className="calculator-keyboard-line margin-bottom-25">
          <NumericButton onClick={updateExpression} value="4" text="4" />
          <NumericButton onClick={updateExpression} value="5" text="5" />
          <NumericButton onClick={updateExpression} value="6" text="6" />
          <OperandButton onClick={updateExpression} value="*" text="×" />
        </div>
        <div className="calculator-keyboard-line margin-bottom-25">
          <NumericButton onClick={updateExpression} value="1" text="1" />
          <NumericButton onClick={updateExpression} value="2" text="2" />
          <NumericButton onClick={updateExpression} value="3" text="3" />
          <OperandButton onClick={updateExpression} value="-" text="-" />
        </div>
        <div className="calculator-keyboard-line margin-bottom-25">
          <NumericButton onClick={updateExpression} value="." text="," />
          <NumericButton onClick={updateExpression} value="0" text="0" />
          <div style={{ width: "78px" }} />
          <OperandButton onClick={updateExpression} value="+" text="+" />
        </div>
        <div className="calculator-keyboard-line">
          <ClearButton onClick={clearResult} text="Clear" />
          <EqualButton onClick={calculateResult} text="=" />
        </div>
      </div>
    );
  }
}

Keyboard.propTypes = {
  updateExpression: PropTypes.func.isRequired,
  calculateResult: PropTypes.func.isRequired,
  clearResult: PropTypes.func.isRequired
};

export default Keyboard;
