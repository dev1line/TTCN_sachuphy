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
    case "CHANGE_NUMBER": {
      const prevNumber = state.cartList[action.key].number;
      state.cartList[action.key].number = action.value;
      return {
        ...state,
        total: state.total + (action.value - prevNumber)*action.price
      };
    }
    case "DELETE": {
      state.cartList.splice(action.index,1);
      const temp = state.cartList;
      console.log("CL:",temp);
      return {
        ...state,
        cartList:temp,
        total: state.total - action.total
      }
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
