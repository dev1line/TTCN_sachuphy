const innitialize = {
    orders: []
}

const orderReducer = (state = innitialize, action) => {
    switch (action.type) {
        case "CHECK_OUT_SUCCESS": {
            state.orders.push(action.order);
            return state;
        }
        case "GET_ALL_ORDER_SUCCESS": {
            return {
                ...state,
                orders: action.orders,
            }
        }
        default: return state;
    }
}

export default orderReducer;