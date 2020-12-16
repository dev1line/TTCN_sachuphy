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
  const products = data.products.all_products;
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
  const products = data.products.all_products;
  console.log(products);
  // console.log(slug);
  if (products.length) {
    const productDefault = products.find((o) => o.default_spec.slug === slug);
    if (!productDefault) {
      const productOptionDetail = products.find((o) =>
        o.options.some((o) => o.slug === slug)
      );
      const optionBySlug = productOptionDetail.options.find(
        (o) => o.slug === slug
      );
      const option = _.pickBy(optionBySlug, o => o === 0 || (o && !_.isArray(o)) || (_.isArray(o) && o.length));
      const product = productOptionDetail.default_spec;
      console.log(product);
      console.log(option);
      const productOption = _.assign({}, product, option);
      console.log(productOption);
      if (productOption) {
        yield put({
          type: "CHANGE_OPTION_SUCCESS",
          fetchProduct: productOption,
        });
      }
    } else {
      if (productDefault) {
        yield put({
          type: "GET_PRODUCT_SUCCESS",
          fetchProduct: productDefault,
        });
      }
    }
  } else {
    // const fetchProduct = yield axios({
    //   method: "get",
    //   url: `${url}/${slug}`,
    // });
    // // console.log(fetchProduct.data.product);
    // if (fetchProduct) {
    //   yield put({
    //     type: "GET_PRODUCT_SUCCESS",
    //     fetchProduct: fetchProduct.data.product,
    //   });
    // }
    return;
  }
}
function* changeOption(input) {
  // const option = input.option
  // const data = yield select();
  // const product = data.products
  // console.log(input);
  // console.log("asdsad");
  // if (option) {
  //   yield put ({type: "CHANGE_PRODUCT_SUCCESS", data: {...products,...option}})
  // }
}
export { getProducts, filterProducts, getProductBySlug, changeOption };
