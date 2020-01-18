import { createStore } from "redux";
import rootReducers from "../reducers/rootReducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const ConfigureStore = () => {
  const store = createStore(rootReducers, devToolsEnhancer());

  return store;
};

export default ConfigureStore;
