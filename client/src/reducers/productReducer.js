const initialize = {
  products: [],
  filterProducts: [],
  product: [],
};

const productReducer = (state = initialize, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS": {
      return {
        ...state,
        products: action.products,
        filterProducts: action.products
      };
    }
    case "FILTER_PRODUCT_SUCCESS": {
      return {
        ...state,
        filterProducts: action.products
      }
    }
    case "GET_PRODUCT_SUCCESS": {
      return {
        ...state,
        product: action.products
      }
    }
    default: return state
  }
};

export default productReducer
