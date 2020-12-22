import { all, takeEvery } from "redux-saga/effects";
import { setTokenLogin, getTokenLogin, logOut } from "./tokenSagas";
import { SET_TOKEN} from "../constants";
import { getProducts, filterProducts, getProductBySlug, changeOption } from "./productSagas";
import { readCart, updateCart } from "./cartSagas";
import { checkout, getAllOrder } from "./orderSagas"
function* rootSagas() {
  yield all([
    takeEvery(SET_TOKEN, setTokenLogin),
    takeEvery("LOGIN", getTokenLogin),
    takeEvery("LOG_OUT", logOut),
    takeEvery("GET_ALL_PRODUCTS", getProducts),
    takeEvery("FILTER_PRODUCTS", filterProducts),
    takeEvery("GET_PRODUCT_BY_SLUG", getProductBySlug),
    takeEvery("CHANGE_OPTION", changeOption),
    takeEvery("GET_CART", readCart),
    takeEvery("UPDATE_CART", updateCart),
    takeEvery("CHECK_OUT", checkout),
    takeEvery("GET_ALL_ORDER", getAllOrder),
  ]);
}

export default rootSagas;
