import { put } from 'redux-saga/effects';
// import axios from 'axios';
//generator function
function* getTokenLogin(input) {
    const {user, pass, email} = input;
    // const data = yield axios({
    //     method:"post",
    //     data: {
    //         "user":user,
    //         "pass":pass,
    //         "email":email
    //     }
    // }).then(res => {
    //     return res.data;
    // })
    yield put({type:"GET_TOKEN_SUCCESS", token:"123sangdeptrai"})
}
export {
    getTokenLogin
}