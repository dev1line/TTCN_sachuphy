import { put } from "redux-saga/effects";
import axios from "axios";
//generator function
const url = `http://localhost:3000/api/v1`;

function* getTokenLogin(input) {
  const { username, password } = input;
  const data = yield axios({
    method: "post",
    url: `${url}/sign-in`,
    data: {
      username,
      password,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data;
    });
  console.log("data", data);
  if (data && data.success) {
    localStorage.setItem("token", data.token);
    yield put({ type: "GET_TOKEN_SUCCESS", token: data.token });
  }
}

function* setTokenLogin(input) {
  const { username, password, confirm_password } = input;
  const data = yield axios({
    method: "post",
    url: `${url}/sign-up`,
    data: {
      username,
      password,
      confirm_password,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data;
    });
  if (data && data.success) {
    yield put({ type: "SET_TOKEN_SUCCESS", success: data.success });
  } else yield put({ type: "SET_TOKEN_FAIL" });
}

function* logOut() {
  yield axios({
    method: "POST",
    url: `${url}/sign-out`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  yield localStorage.clear();
  yield put({type:"RESET_DATA"});
  yield put({ type: "LOG_OUT_DONE" });
}
export { getTokenLogin, setTokenLogin, logOut };
