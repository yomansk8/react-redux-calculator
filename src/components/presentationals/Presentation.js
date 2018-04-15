import React from "react";
import ReactEmoji from "react-emoji";
import "./Presentation.css";

const Presentation = () => (
  <div className="presentation">
    <h1>
      REACT/REDUX<br />
      <span>CALCULATOR</span>
    </h1>
    <div className="presentation-text">
      This app is a simple calculator made with <strong>React.js</strong> &{" "}
      <strong>Redux</strong>.<br />
      <br />
      {ReactEmoji.emojify("Enjoy it ! ;)", {
        emokiType: "emojione",
        attributes: { width: "24px", height: "24px" }
      })}
    </div>
    <div className="presentation-hint">
      <strong>Hint:</strong> Press <span className="shadow">Space</span> on your
      keyboard.
    </div>
  </div>
);

export default Presentation;
