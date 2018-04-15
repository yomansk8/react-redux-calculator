import math from "mathjs";
import { UPDATE_EXPRESSION, CALCULATE_RESULT, CLEAR_RESULT } from "../actions";

const operators = ["+", "-", "/", "*"];

const defaultState = {
  expression: "",
  result: ""
};

const calculateExpression = expression => {
  try {
    return math.eval(expression).toString(10);
  } catch (e) {
    return "Error";
  }
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_EXPRESSION:
      const { expression: oldExpression } = state;
      if (
        (oldExpression === "" ||
          operators.indexOf(oldExpression.slice(-1)) > -1) &&
        (operators.indexOf(action.input) > -1 || action.input === ".")
      ) {
        return state;
      }
      const newExpression = `${oldExpression}${action.input}`;
      const newState =
        operators.indexOf(newExpression.slice(-1)) === -1
          ? {
              ...state,
              expression: newExpression,
              result: calculateExpression(newExpression)
            }
          : {
              ...state,
              expression: newExpression
            };
      return newState;
    case CALCULATE_RESULT:
      return {
        ...state,
        expression:
          state.expression === ""
            ? state.expression
            : calculateExpression(state.expression),
        result: ""
      };
    case CLEAR_RESULT:
      return defaultState;
    default:
      return state;
  }
};

export default rootReducer;
