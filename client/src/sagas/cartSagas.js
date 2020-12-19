import { put } from "redux-saga/effects";
import axios from "axios";
import {convertItem} from "../help/convertItem"
// import { convert } from "../help/convert";

const url = "http://localhost:3000/api/v1/cart";

function* readCart() {
    const fetchCart = yield axios({
        method: "GET",
        url: `${url}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.data;
      });
      console.log(fetchCart.cart.products)
    if(fetchCart.cart.products) {
        let dataConvert = Object.values(convertItem([], fetchCart))
        console.log(dataConvert)
        localStorage.setItem("cart",  JSON.stringify(dataConvert));
        yield put({
            type: "GET_CART_SUCCESS",
            fetchCart: dataConvert,
          });
    }
}

function* updateCart(input) {
    const cart = input.action;
    console.log(cart)
    cart.cart.products?localStorage.setItem("cart",JSON.stringify(cart.cart.products)):localStorage.setItem("cart", "[]");
    console.log(cart);

    let data = JSON.stringify(cart);
    console.log(data)
    yield axios({
        method: "PUT",
        url: `${url}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': "application/json",
        },
        data : data

      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.data;
      });
}

export { readCart, updateCart };