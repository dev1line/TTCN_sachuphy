import { all, takeEvery } from 'redux-saga/effects';
import {setTokenLogin, getTokenLogin} from './tokenSagas';
import {SET_TOKEN} from '../constants'
function* rootSagas() {
    yield all([
        takeEvery(SET_TOKEN, setTokenLogin),    
        takeEvery("LOGIN", getTokenLogin),      
    ])
}

export default rootSagas;