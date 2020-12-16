const initialize = {
  products: [],
  filteredProducts: []
};

const productReducer = (state = initialize, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS": {
      return {
        ...state,
        products: action.fetchProducts
      };
    }
    case "FILTER_PRODUCTS_SUCCESS": {
      return {
        ...state,
        filteredProducts: action.filteredProducts
      }
    }
    case "GET_PRODUCT_SUCCESS": {
      return {
        ...state,
        products: [...state.products, action.fetchProduct]
      }
    }
    default: return state
  }
};

export default productReducer
