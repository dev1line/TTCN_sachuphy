import {
  GET_ALL_PRODUCTS,
  FILTER_PRODUCTS,
  GET_PRODUCT_BY_SLUG,
  CHANGE_OPTION
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
export const changeOption = (product) => {
  return {
    type: CHANGE_OPTION,
    product,
  };
};
