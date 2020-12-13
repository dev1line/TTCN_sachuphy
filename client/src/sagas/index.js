import { all, takeEvery } from "redux-saga/effects";
import { setTokenLogin, getTokenLogin, logOut } from "./tokenSagas";
import { SET_TOKEN, FILTER_PRODUCT, GET_PRODUCT_BY_SLUG } from "../constants";
import { getProducts, filterProduct, getProductBySlug } from "./productSagas";
function* rootSagas() {
  yield all([
    takeEvery(SET_TOKEN, setTokenLogin),
    takeEvery("LOGIN", getTokenLogin),
    takeEvery("LOG_OUT", logOut),
    takeEvery("GET_PRODUCTS", getProducts),
    takeEvery(FILTER_PRODUCT, filterProduct),
    takeEvery(GET_PRODUCT_BY_SLUG, getProductBySlug),
  ]);
}

export default rootSagas;
