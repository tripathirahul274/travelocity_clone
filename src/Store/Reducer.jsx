import { getData, setData } from "../LocalStorage/LocalStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOG_OUT, PAYMENT_TYPE } from "./ActionTypes";

const initState = {
  login: false,
  userName: getData("username") || "",
  paymentAmount: null
};

export const Authreducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setData("username", action.payload);
      return {
        ...state,
        login: true,
        userName: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        login: false,
      };
    case LOG_OUT:
      setData("username", "");
      return {
        ...state,
        login: false,
        userName: "",
      };
    case PAYMENT_TYPE:
      console.log(action.payload);
      return {
        ...state,
        paymentAmount: action.payload
      }

    default: {
      return state;
    }
  }
};
