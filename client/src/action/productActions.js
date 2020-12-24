import {
  GET_ALL_PRODUCTS,
  FILTER_PRODUCTS,
  GET_PRODUCT_BY_SLUG,
} from "../constants";

export const getProducts = (products) => {
  return {
    type: GET_ALL_PRODUCTS,
    products,
  };
};
export const filterProducts = (filteredProducts) => {
  return {
    type: FILTER_PRODUCTS,
    filteredProducts,
  };
};
export const getProductBySlug = (product) => {
  return {
    type: GET_PRODUCT_BY_SLUG,
    product,
  };
};

