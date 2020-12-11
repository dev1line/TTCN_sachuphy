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
  const filterName = input.filterByName;
  const filterPrice = input.filterByPrice;
  console.log(input);
  const data = yield select();
  const products = data.products.products;
  console.log(products);
  const filterProduct = yield _.filter(products, function (o) {
    if (filterName === "All") {
      return o.default_spec.price >= (filterPrice[0]*1000000) && o.default_spec.price <= (filterPrice[1]*1000000);
    } else return o.default_spec.manufacturer === filterName && o.default_spec.price >= (filterPrice[0]*1000000) && o.default_spec.price <= (filterPrice[1]*1000000);
  });
  if (filterProduct) {
    console.log(filterProduct, "ok");
    yield put({ type: "FILTER_PRODUCT_SUCCESS", products: filterProduct });
  }
}
export { getAllProduct, filterProduct };
