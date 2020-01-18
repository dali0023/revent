import { INCREMENTCOUNTER, DECREMENTCOUNTER } from "./testConstant";
import { createReducer } from "../../app/common/utill/ReducersUtils";

const initialState = {
  data: 42
};

const incrementCounter = state => {
  return { ...state, data: state.data + 1 };
};
const decrementCounter = state => {
  return { ...state, data: state.data - 1 };
};

export default createReducer(initialState, {
  [INCREMENTCOUNTER]: incrementCounter,
  [DECREMENTCOUNTER]: decrementCounter
});
