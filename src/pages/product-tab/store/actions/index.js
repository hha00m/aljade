import axios from "axios";
import { Toast } from "antd-mobile";
import {API} from '../../../../config'
export function fetchingProductsMethod(
  username,
  password,
   search = "",
  // flag = "",
  pageIndex = 1,
   limit = 20,
  // category = "",
  data = [],
  update = false
) {
  return function (dispatch) {
    let url = `${API}/_products.php?username=${username}&password=${password}&limit=${limit}&page=${pageIndex}`;
    //  let url = `http://localhost:8050/api/products?username=07822816693&password=12345678&limit=10&page=${pageIndex}`;
    if (search) url += `&search=${search}`;
    // if (flag) url += `&flagList=${flag}`;
    // if (category) url += `&category=${category}`;
    if (navigator.onLine) {
      if (update) localStorage.removeItem(url);
    } else {
      Toast.offline("لايوجد انترنيت حاول مجددا", 2, null, false);
    }
    let data2 = localStorage.getItem(url);

    switch (data2) {
      case null: {
        axios
          .get(url)
          .then((response) => {
            let obj = response.data.data;
            localStorage.setItem(url, JSON.stringify(obj));

            dispatch({
              type: "FETCH_PRODUCTS_FULFILLED",
              payload: data.concat(obj),
            });
          })
          .catch((err) => {
            dispatch({ type: "FETCH_PRODUCTS_REJECTED", payload: err });
          });
        break;
      }

      default: {
        data2 = JSON.parse(data2);
        data = data.concat(data2);
        dispatch({
          type: "FETCH_PRODUCTS_FULFILLED",
          payload: data,
        });
      }
    }
  };
}

export function productDetails(user, productId) {
  return function (dispatch) {
    axios
      .get
      `${API}/_product.php?username=${user.username}&password=${user.password}&product=${productId}`
      ()
      .then((response) => {
        dispatch({
          type: "FETCH_PRODUCT_DETAILS_FULFILLED",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH _PRODUCT_DETAILS_REJECTED", payload: err });
      });
  };
}
export const showSearchBar = (val) => {
  return {
    type: "SHOW_SEARCH_BAR",
    payload: val,
  };
};
export const showStyleBarMethod = (val) => {
  return {
    type: "SHOW_STYLE_BAR",
    payload: val,
  };
};
export const searchForInfoMethod = (val) => {
  return {
    type: "SEARCH_FOR_INFO",
    payload: val,
  };
};

export const selectedProductMethod = (val) => {
  return {
    type: "SELECTED_PRODUCT_GRID",
    payload: val,
  };
};