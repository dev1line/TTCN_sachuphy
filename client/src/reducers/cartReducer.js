import {convert} from '../help/convert';
const initial = {
  cartList: [],
  total: 0
};

const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_CART": {
      let temp = convert(state.cartList,action.item,"add");
      console.log("temp1:",temp)
      return {
        ...state,
        cartList: temp,
        total: state.total + action.price
      };
    }
    case "DELETE_ITEM": {
      let temp = convert(state.cartList,action.item,"delete");
      console.log("temp2:",temp)
      return {
        ...state,
        cartList: temp,
        total: state.total - action.price
      };
    }
    // case "CHANGE_TOTAL": {
    //   console.log("total",action.total)
    //   console.log("state2",state.cartList)
    //   return {
    //     ...state,
    //     total: action.total
    //   }
    // }
    default: {
      return state;
    }
  }
};
export default cartReducer;
