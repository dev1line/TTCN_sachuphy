import { all, takeLatest } from 'redux-saga/effects';

function* rootSagas() {
    yield all([
        //fork(forkAll)
        // takeLatest(SET_DEFAULT, getDataDefault),      
    ])
}



export default rootSagas;