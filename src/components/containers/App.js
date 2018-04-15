import { connect } from "react-redux";
import * as actions from "../../actions";
import App from "../presentationals/App";

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  generateMonkeyExpression: () => dispatch(actions.generateMonkeyExpression())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
