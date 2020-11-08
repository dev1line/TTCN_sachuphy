import {SET_TOKEN} from '../constants'
 export const setToken = (username, password, confirm_password) => {
    return {
        type:SET_TOKEN,
        username,
        password,
        confirm_password
    }
}