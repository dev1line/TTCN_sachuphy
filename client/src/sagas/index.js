import { all, takeEvery } from 'redux-saga/effects';
import {setTokenLogin, getTokenLogin, logOut} from './tokenSagas';
import {SET_TOKEN} from '../constants'
function* rootSagas() {
    yield all([
        takeEvery(SET_TOKEN, setTokenLogin),    
        takeEvery("LOGIN", getTokenLogin), 
        takeEvery("LOG_OUT", logOut),     
    ])
}

export default rootSagas;