import { put } from "redux-saga/effects";
import axios from "axios";
import {change} from "../help/convert"
import config from '../config'

// import { convert } from "../help/convert";

const url = `http://${config.HOST}:${config.PORT}/api/v1/cart`;

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
      
    if(fetchCart.cart.products) {
        let dataConvert = Object.values(change(fetchCart.cart.products))
        
        localStorage.setItem("cart",  JSON.stringify(dataConvert));
        yield put({
            type: "GET_CART_SUCCESS",
            fetchCart: dataConvert,
          });
    }
}

function* updateCart(input) {
    const cart = input.action;
    
    cart.cart.products?localStorage.setItem("cart",JSON.stringify(change(cart.cart.products))):localStorage.setItem("cart", "[]");
    
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