const initialize = {
  all_products: [],
  products: [],
  product: [],
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
        product: action.fetchProduct,
      }
    }
    case "CHANGE_OPTION_SUCCESS": {
      return {
        ...state,
        product: action.data
      }
    }
    default: return state
  }
};

export default productReducer
