import { put, select } from "redux-saga/effects";
import axios from "axios";
import _ from "lodash";

const url = "http://localhost:3000/api/v1/product";

function* getAllProduct() {
  const fetchProducts = yield axios({
    method: "get",
    url: `${url}`,
  });
  if (fetchProducts) {
    yield put({
      type: "GET_PRODUCT_SUCCESS",
      products: fetchProducts.data.products,
    });
  }
}
function* filterProduct(input) {
  const filter = input.filterByName;
  console.log(input);
  console.log(filter);
  const data = yield select();
  const products = data.products.products;
  console.log(products);
  const filterProduct = yield _.filter(products, function (o) {
    if (filter === "All") {
      return products;
    } else return o.default_spec.manufacturer === filter;
  });
  if (filterProduct) {
    yield put({ type: "FILTER_PRODUCT_SUCCESS", products: filterProduct });
  }
}
export { getAllProduct, filterProduct };
