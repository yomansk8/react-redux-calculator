// Action types
export const UPDATE_EXPRESSION = "UPDATE_EXPRESSION";
export const CALCULATE_RESULT = "CALCULATE_RESULT";
export const CLEAR_RESULT = "CLEAR_RESULT";

const operators = ["+", "-", "/", "*"];
const MAX_MONKEY_EXP_PARTS = 10;

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const generateMonkeyExpression = () => dispatch => {
  dispatch(clearResult());
  const expressionParts = getRandomInt(MAX_MONKEY_EXP_PARTS);
  for (let i = 0; i <= expressionParts; i += 1) {
    dispatch(updateExpression(getRandomInt(9)));
    if (i < expressionParts) {
      dispatch(updateExpression(operators[getRandomInt(operators.length)]));
    }
  }
};

// Action creators
export const updateExpression = input => ({
  type: UPDATE_EXPRESSION,
  input
});

export const calculateResult = () => ({
  type: CALCULATE_RESULT
});

export const clearResult = () => ({
  type: CLEAR_RESULT
});
