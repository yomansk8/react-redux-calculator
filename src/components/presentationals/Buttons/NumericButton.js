import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class NumericButton extends React.Component {
  render() {
    const { text, value, onClick } = this.props;
    return (
      <Button
        className="calculator-button-numeric"
        text={text}
        onClick={() => onClick(value)}
      />
    );
  }
}

NumericButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NumericButton;
