import { put } from "redux-saga/effects";
import axios from "axios";
import {change} from "../help/convert"
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
        let dataConvert = Object.values(change(fetchCart.cart.products))
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
    cart.cart.products?localStorage.setItem("cart",JSON.stringify(change(cart.cart.products))):localStorage.setItem("cart", "[]");
    console.log(cart);
    const products = cart? cart.cart.products.map(el => {
      return {
        "slug" : el.default_spec?el.default_spec.slug:el.slug,
        "quantity": el.number,
      }
    }):[];
    let data = {
      "cart":
      {
        products
      }
    }
    data = JSON.stringify(data);
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