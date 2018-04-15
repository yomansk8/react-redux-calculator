import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class ClearButton extends React.Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <Button
        color="red"
        large
        text={text}
        onClick={onClick}
        fontSize="large"
      />
    );
  }
}

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default ClearButton;
