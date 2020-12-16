const initialize = {
  all_products: [],
  products: [],
  default_product: [],
  options: [],
};

const productReducer = (state = initialize, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS": {
      return {
        ...state,
        all_products: action.fetchProducts,
        products: action.fetchProducts
      };
    }
    case "FILTER_PRODUCTS_SUCCESS": {
      return {
        ...state,
        products: action.filteredProducts
      }
    }
    case "GET_PRODUCT_SUCCESS": {
      return {
        ...state,
        default_product: action.fetchProduct.default_spec,
        options: action.fetchProduct.options,
      }
    }
    case "CHANGE_OPTION_SUCCESS": {
      return {
        ...state,
        default_product: action.fetchProduct,
        // options: action.fetchProduct.options,
      }
    }
    default: return state
  }
};

export default productReducer
