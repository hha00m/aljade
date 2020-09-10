import axios from "axios";

export function login(username,password) {
  return function (dispatch) {
    axios
      .get(
        `https://albarqexpress.com/store/api/?username=${username}&password=${password}`
      )
      .then((response) => {
        dispatch({ type: "LOGIN_FULFILLED", payload:{data: response.data,password:password} });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_REJECTED", payload: err });
      });
  };
}

export function logout(userId) {
    return function (dispatch) {
      axios
        .get(
          `https://albarqexpress.com/store/api/_logout.php?user=${userId}`
        )
        .then((response) => {
          dispatch({ type: "LOGOUT_FULFILLED", payload: response.data });
        })
        .catch((err) => {
          dispatch({ type: "LOGOUT_REJECTED", payload: err });
        });
    };
  }

