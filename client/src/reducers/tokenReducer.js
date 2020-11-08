const initial = {
    token:'',
}

const tokenReducer = (state = initial, action) => {
    switch(action.type) {
        case "GET_TOKEN_SUCCESS": {
            return {
                ...state,
                token: action.token
            }
        }
        default: {
            return state;
        }
    }
}
export default tokenReducer;