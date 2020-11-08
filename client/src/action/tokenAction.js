import {GET_TOKEN} from '../constants'
 export const getToken = (user, pass, email) => {
    return {
        type:GET_TOKEN,
        user,
        pass,
        email
    }
}