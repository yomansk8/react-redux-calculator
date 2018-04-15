import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class OperandButton extends React.Component {
  render() {
    const { text, value, onClick } = this.props;
    return (
      <Button
        color="blue"
        text={text}
        onClick={() => onClick(value)}
        fontSize="large"
      />
    );
  }
}

OperandButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default OperandButton;
