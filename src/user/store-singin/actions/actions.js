import axios from "axios";
import { Toast } from "antd-mobile";
import { API } from "../../../config";
export function logoutMethod(state) {
  return function (dispatch) {
    if (state) {
      localStorage.removeItem("user");
    }
    dispatch({
      type: "SINOUT_FULFILLED",
      payload: {
        isLogout: state,
      },
    });
  };
}
export function singinWithServer(username = "", password = "", logout=false) {
  return function (dispatch) {
    if (logout) {
      localStorage.removeItem("user");
      dispatch({
        type: "SIGNOUT_FULFILLED",
        payload: { user: "err", isLogout: logout },
      });
    }
    let user = localStorage.getItem("user");
    let url = `${API}/_login.php?username=${username}&password=${password}`;
    if (username || user) {
      if (!user) {
        axios
          .get(url)
          .then((response) => {
            if (response.data.data) {
              let obj = { data: response.data.data, password: password };
              localStorage.setItem("user", JSON.stringify(obj));
              dispatch({
                type: "SINGIN_WITH_DB_FULFILLED",
                payload: { user: obj, isLogout: logout },
              });
            } else {
              Toast.fail("خطاء حصل");
              dispatch({
                type: "SINGIN_WITH_DB_REJECTED",
                payload: { user: "err", isLogout: logout },
              });
            }
          })
          .catch((err) => {
            dispatch({
              type: "SINGIN_WITH_DB_REJECTED",
              payload: { user: err, isLogout: logout },
            });
          });
      } else {
        user = JSON.parse(user);
        dispatch({
          type: "SINGIN_WITH_DB_FULFILLED",
          payload: { user: user, isLogout: logout },
        });
      }
    } else dispatch({ type: "SINGIN_WITH_DB_REJECTED", payload: { user: 'err', isLogout: logout } });
  };
}
