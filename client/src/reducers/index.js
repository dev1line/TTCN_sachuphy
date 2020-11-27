import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import productReducer from "./productReducer";
const rootReducers = combineReducers({
  token: tokenReducer,
  products: productReducer,
});
export default rootReducers;
