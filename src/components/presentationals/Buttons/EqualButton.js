import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class EqualButton extends React.Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <Button
        color="green"
        large
        text={text}
        onClick={onClick}
        fontSize="large"
      />
    );
  }
}

EqualButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default EqualButton;
