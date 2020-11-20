const initial = {
  token: "",
  signup_success: false,
};

const tokenReducer = (state = initial, action) => {
  switch (action.type) {
    case "GET_TOKEN_SUCCESS": {
      return {
        ...state,
        token: action.token,
      };
    }
    case "SET_TOKEN_SUCCESS": {
      return {
        ...state,
        signup_success: true,
      };
    }
    case "SET_TOKEN_FAIL": {
      return {
        ...state,
        signup_success: false,
      };
    }
    case "LOG_OUT_DONE": {
      return {
        ...state,
        token: "",
      }
    }
    default: {
      return state;
    }
  }
};
export default tokenReducer;
