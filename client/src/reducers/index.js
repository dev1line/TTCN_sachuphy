import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
const rootReducers = combineReducers({
  token: tokenReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
});
export default rootReducers;
