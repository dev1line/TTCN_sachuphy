import { put } from "redux-saga/effects"
import axios from "axios"


const checkoutAPI = "http://localhost:3000/api/v1/checkout";
const orderlistAPI = "http://localhost:3000/api/v1/order"

function* checkout(input) {
    let cart = JSON.stringify(input.action);
    let token = localStorage.getItem("token")?localStorage.getItem("token"):""
    const order = yield axios({
        method: "post",
        url: `${checkoutAPI}`,
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': "application/json",
          },
        data : cart
    });
    if(order) {

        yield put({
            type: "RESET_DATA"
        })
        let orders = localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[];
        orders.push(order.data.order);
        localStorage.setItem("order", JSON.stringify(orders));
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
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': "application/json",
        },
    });
    if(listorder) {
        console.log(listorder.data.orders)
        localStorage.setItem("order", JSON.stringify(listorder.data.orders))
        yield put({
            type: "GET_ALL_ORDER_SUCCESS",
            orders: listorder.data.orders,
        });
    }
}

export { checkout, getAllOrder }