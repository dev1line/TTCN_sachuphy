const initialize = {
  products: [],
  currentProduct: []
};

const productReducer = (state = initialize, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS": {
      return {
        ...state,
        products: action.fetchProducts,
        currentProduct: action.fetchProducts
      };
    }
    case "FILTER_PRODUCTS_SUCCESS": {
      return {
        ...state,
        currentProduct: action.filteredProducts
      }
    }
    case "GET_PRODUCT_SUCCESS": {
      return {
        ...state,
        products: [...state.products, action.fetchProduct]
      }
    }
    case "SORT_PRODUCTS_SUCCESS": {
      return {
        ...state,
        currentProduct: action.sortedProducts
      }
    }
    default: return state
  }
};

export default productReducer
