import { put } from "redux-saga/effects";
import axios from "axios";

const url = "http://localhost:3000/api/v1/product";

function* getAllProduct() {
  const fetchProducts = yield axios({
    method: "get",
    url: `${url}`,
  })
  if(fetchProducts) {
    yield put({ type: "GET_PRODUCT_SUCCESS", products: fetchProducts.data.products });
  }
}
export { getAllProduct };
