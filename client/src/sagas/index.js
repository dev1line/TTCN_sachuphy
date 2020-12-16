import { all, takeEvery } from "redux-saga/effects";
import { setTokenLogin, getTokenLogin, logOut } from "./tokenSagas";
import { SET_TOKEN } from "../constants";
import { getProducts, filterProducts, getProductBySlug } from "./productSagas";
function* rootSagas() {
  yield all([
    takeEvery(SET_TOKEN, setTokenLogin),
    takeEvery("LOGIN", getTokenLogin),
    takeEvery("LOG_OUT", logOut),
    takeEvery("GET_ALL_PRODUCTS", getProducts),
    takeEvery("FILTER_PRODUCTS", filterProducts),
    takeEvery("GET_PRODUCT_BY_SLUG", getProductBySlug),
  ]);
}

export default rootSagas;
