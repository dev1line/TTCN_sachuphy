const initialize = {
  products: [],
};

const productReducer = (state = initialize, action) => {
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS": {
      return {
        ...state,
        products: action.products,
      };
    }
    default: return state
  }
};

export default productReducer
