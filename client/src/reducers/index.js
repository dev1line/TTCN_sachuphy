import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import dataItemReducer from "./dataItemReducer";
const rootReducers = combineReducers({
  token: tokenReducer,
  dataItem: dataItemReducer,
});
export default rootReducers;
