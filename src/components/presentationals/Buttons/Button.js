import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  render() {
    const { onClick, text, large, color, fontSize } = this.props;
    const colorClass = color ? color : "white";
    const fontSizeClass = `font-${fontSize ? fontSize : "regular"}`;
    return (
      <div
        className={`calculator-button shadow ${colorClass} ${
          large ? "large" : ""
        } ${fontSizeClass}`}
        onClick={onClick}
      >
        {text}
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  large: PropTypes.bool,
  color: PropTypes.oneOf(["white", "blue", "red", "green"]),
  fontSize: PropTypes.oneOf(["regular", "large"])
};

export default Button;
