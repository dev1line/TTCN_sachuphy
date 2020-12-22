import { put } from "redux-saga/effects"
import axios from "axios"


const checkoutAPI = "http://localhost:3000/api/v1/checkout";
const orderlistAPI = "http://localhost:3000/api/v1/order"

function* checkout() {
    const order = yield axios({
        method: "post",
        url: `${checkoutAPI}`,
    });
    if(order) {
        yield put({
            type: "CHECK_OUT_SUCCESS",
            order: order.data.order,
        });
    }
}

function* getAllOrder () {
    const listorder = yield axios({
        method: "GET",
        url: `${orderlistAPI}`,
    });
    if(listorder) {
        yield put({
            type: "GET_ALL_ORDER_SUCCESS",
            orders: listorder.data.orders,
        });
    }
}

export { checkout, getAllOrder }