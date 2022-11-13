import { LOGIN_FAILURE, LOGIN_SUCCESS, LOG_OUT, PAYMENT_TYPE } from "./ActionTypes";

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const paymentType = (payload) => {
  return {
    type: PAYMENT_TYPE,
    payload
  }
}
