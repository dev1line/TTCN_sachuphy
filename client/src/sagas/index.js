import { all, takeLatest } from 'redux-saga/effects';
import {getTokenLogin} from './tokenSagas';
import {GET_TOKEN} from '../constants'
function* rootSagas() {
    yield all([
        takeLatest(GET_TOKEN, getTokenLogin),      
    ])
}



export default rootSagas;