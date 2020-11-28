import { put } from "redux-saga/effects";
import axios from "axios";

const url = "http://localhost:3000/api/v1/product";

function* getAllProduct() {
  const data = yield axios({
    method: "get",
    url: `${url}`,
  })
  if(data) {
    yield put({ type: "GET_PRODUCT_SUCCESS", products: data.data.products });
  }
}
export { getAllProduct };
