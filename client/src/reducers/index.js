import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
const rootReducers = combineReducers({
  token: tokenReducer,
  products: productReducer,
  cart: cartReducer,
});
export default rootReducers;
