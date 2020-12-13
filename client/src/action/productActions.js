import {
  GET_PRODUCTS,
  FILTER_PRODUCT,
  GET_PRODUCT_BY_SLUG,
} from "../constants";

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products,
  };
};
export const filterProduct = (products) => {
  return {
    type: FILTER_PRODUCT,
    products,
  };
};
export const getProductBySlug = (products) => {
  return {
    type: GET_PRODUCT_BY_SLUG,
    products,
  };
};
