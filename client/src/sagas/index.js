import { all, takeEvery } from "redux-saga/effects";
import { setTokenLogin, getTokenLogin, logOut } from "./tokenSagas";
import { SET_TOKEN, FILTER_PRODUCT } from "../constants";
import { getAllProduct, filterProduct } from "./productSagas";
function* rootSagas() {
  yield all([
    takeEvery(SET_TOKEN, setTokenLogin),
    takeEvery("LOGIN", getTokenLogin),
    takeEvery("LOG_OUT", logOut),
    takeEvery("GET_ALL_PRODUCT", getAllProduct),
    takeEvery(FILTER_PRODUCT, filterProduct)
  ]);
}

export default rootSagas;
