import { put, select } from "redux-saga/effects";
import axios from "axios";
import _ from "lodash";

const url = "http://localhost:3000/api/v1/product";

function* getProducts() {
  const fetchProducts = yield axios({
    method: "get",
    url: `${url}`,
  });
  if (fetchProducts) {
    yield put({
      type: "GET_PRODUCTS_SUCCESS",
      fetchProducts: fetchProducts.data.products,
    });
  }
}
function* filterProducts(input) {
  const filterName = input.filterByName;
  const filterPrice = input.filterByPrice;
  // console.log(input);
  const data = yield select();
  const products = data.products.products;
  // console.log(products);
  const filteredProducts = yield _.filter(products, function (o) {
    if (filterName === "All") {
      return (
        o.default_spec.price >= filterPrice[0] * 1000000 &&
        o.default_spec.price <= filterPrice[1] * 1000000
      );
    } else return o.default_spec.manufacturer === filterName && o.default_spec.price >= filterPrice[0] * 1000000 && o.default_spec.price <= filterPrice[1] * 1000000;
  });
  if (filteredProducts) {
    // console.log(filterProduct, "ok");
    yield put({
      type: "FILTER_PRODUCTS_SUCCESS",
      filteredProducts: filteredProducts,
    });
  }
}
function* getProductBySlug(input) {
  const slug = input.slug;
  const data = yield select();
  const products = data.products.products;
  const existedSlugs = [
    products.flatMap((element) => [
      element.default_spec.slug,
      ...element.options.flatMap((option) => option.slug),
    ]),
  ];
  if (existedSlugs.includes(slug)) return;
  const fetchProduct = yield axios({
    method: "get",
    url: `${url}/${slug}`,
  });
  if (fetchProduct) {
    yield put({
      type: "GET_PRODUCT_SUCCESS",
      fetchProduct: fetchProduct.data.product,
    });
  }
}
function* sortProducts(input) {
  const sort = input.sortProducts;
  // console.log(sort);
  const data = yield select();
  const products = data.products.products;
  console.log(products);
  const sortedProducts = _.sortBy(products, (o) => {return sort === "Name" ? o.default_spec.name : o.default_spec.price});
  if (sortedProducts) {
    yield put({
      type: "SORT_PRODUCTS_SUCCESS",
      sortedProducts: sortedProducts,
    });
  }
}

export { getProducts, filterProducts, getProductBySlug, sortProducts };
