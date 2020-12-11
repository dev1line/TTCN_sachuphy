const initial = {
  cartList: [],
};

const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_CART": {
      let temp = state.cartList.slice();
      temp.push(action.item);
      console.log("temp:", temp);
      return {
        ...state,
        cartList: temp,
      };
    }
    case "DELETE_ITEM": {
      let temp = state.cartList.slice();
      temp.splice(action.index, 1);
      console.log("temp:", temp);
      return {
        ...state,
        cartList: temp,
      };
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
