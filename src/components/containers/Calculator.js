import { connect } from "react-redux";
import * as actions from "../../actions";
import Calculator from "../presentationals/Calculator";

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  updateExpression: expression =>
    dispatch(actions.updateExpression(expression)),
  calculateResult: () => dispatch(actions.calculateResult()),
  clearResult: () => dispatch(actions.clearResult())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
