import axios from "axios";

export function OrdersList(
  user,
  search = "",
  pageIndex = 0,
  limit = 20,
) {
  return function (dispatch) {
    let url = `https://aljade.com/store/api/?username=${user.username}&
                password=${user.password}&page=${pageIndex}&limit=${limit}`;
    if (search) url += `&search=${search}`;

    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: "FETCH_ORDERS_LIST_FULFILLED",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ORDERS_LIST_REJECTED", payload: err });
      });
  };
}

export function productDetails(user, productId) {
  return function (dispatch) {
    axios
      .get(
        `https://aljade.com/store/api/?username=${user.username}&password=${user.password}&product=${productId}`
      )
      .then((response) => {
        dispatch({
          type: "FETCH_ORDER_DETAILS_FULFILLED",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH _ORDER_DETAILS_REJECTED", payload: err });
      });
  };
}
