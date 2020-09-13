import axios from 'axios';
import {API} from '../../../../config';
export function fetchingOrdersMethods(username = "", password = "",pageInde,data) {
    return function (dispatch) {
      let url = `${API}/_getOrders.php?username=${username}&password=${password}&page=${pageInde}`;
      if (username.length > 0)
        axios 
          .get(url)
          .then((response) => {
            dispatch({
              type: "FETCH_ORDERS_FULFILLED",
              payload:data.concat( response.data.data),
            });
          })
          .catch((err) => {
            dispatch({ type: "FETCH_ORDERS_REJECTED", payload: err });
          });
    };
  }