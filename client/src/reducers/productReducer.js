const initialize = {
  products: [],
  filterProducts: []
};

const productReducer = (state = initialize, action) => {
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS": {
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
    default: return state
  }
};

export default productReducer
