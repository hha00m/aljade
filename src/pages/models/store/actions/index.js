import axios from "axios";
import { Toast } from "antd-mobile";
import { API } from "../../../../config";
export const activeModelMethod = (val) => {
  return {
    type: "ACTIVE_MODEL",
    payload: val,
  };
};
//-------------------------------------------------------------
export const closeModelMethod = (val) => {
  return {
    type: "CLOSE_MODEL",
    payload: val,
  };
};
//-------------------------------------------------------------
export function fetchingBasketsMethod(
  username = "",
  password = "",
  update = false
) {
  return function (dispatch) {
    let url = `${API}/_getBaskets.php?username=${username}&password=${password}`;
    if (username.length > 0) {
      if (navigator.onLine) {
        if (update) localStorage.removeItem("basketsList");
      }
      // else {
      //   Toast.offline("لايوجد انترنيت حاول مجددا", 2, null, false);
      // }

      let data2 = null; //localStorage.getItem("basketsList");

      switch (data2) {
        case null: {
          axios
            .get(url)
            .then((response) => {
              let obj = response.data.data;
              localStorage.setItem("basketsList", JSON.stringify(obj));
              dispatch({
                type: "FETCH_BASKETS_FULFILLED",
                payload: obj,
              });
            })
            .catch((err) => {
              dispatch({ type: "FETCH_BASKETS_REJECTED", payload: err });
            });
          break;
        }
        default: {
          data2 = JSON.parse(data2);
          dispatch({
            type: "FETCH_BASKETS_FULFILLED",
            payload: data2,
          });
        }
      }
    }
  };
}

//-------------------------------------------------------------
export function fetchingBasketByIDMethod(username = "", password = "", basket) {
  return function (dispatch) {
    let url = `${API}/_getBasketByID.php?username=${username}&password=${password}&id=${basket}`;
    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          dispatch({
            type: "FETCH_BASKET_BY_ID_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "FETCH_BASKET_BY_ID__REJECTED", payload: err });
        });
  };
}

export function deleteBasketsMethod(username = "", password = "", basketId) {
  return function (dispatch) {
    let url = `${API}/_deleteBasket.php?username=${username}&password=${password}&id=${basketId}`;
    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          if (response.data.success === 1) {
            Toast.success(" تم ", 2, null, false);
          } else {
            Toast.fail(" حاول مرة اخرا ", 2, null, false);
          }
          dispatch({
            type: "REMOVE_BASKET_FROM_DB_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "REMOVE_BASKET_FROM_DB_REJECTED", payload: err });
        });
  };
}
export function createNewBasket(username = "", password = "", basket) {
  return function (dispatch) {
    if (basket && username.length > 0) {
      let url = `${API}/_createBasket.php/?username=${username}&password=${password}`;
      if (basket.name) url += `&name=${basket.name}`;
      if (basket.phone) url += `&phone=${basket.phone}`;
      if (basket.city) url += `&city=${basket.city}`;
      if (basket.town) url += `&town=${basket.town}`;
      if (basket.address) url += `&address=${basket.address}`;
      if (basket.note) url += `&note=${basket.note}`;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          if (response.data.success === 1) {
            Toast.success(" تم ", 2, null, false);
          } else {
            Toast.fail(" حاول مرة اخرا ", 2, null, false);
          }          dispatch({
            type: "CREATE_NEW_BASKET_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "CREATE_NEW_BASKET_REJECTED", payload: err });
        });
    }
  };
}

export function updateBasketMethod(username = "", password = "", basket) {
  return function (dispatch) {
    if (basket && username.length > 0) {
      let url = `${API}/_updateBasket.php/?username=${username}&password=${password}&basket=${basket.id}`;
      if (basket.name) url += `&name=${basket.name}`;
      if (basket.phone) url += `&phone=${basket.phone}`;
      if (basket.city) url += `&city=${basket.city}`;
      if (basket.town) url += `&town=${basket.town}`;
      if (basket.address) url += `&address=${basket.address}`;
      if (basket.note) url += `&note=${basket.note}`;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          if (response.data.success === 1) {
            Toast.success(" تم ", 2, null, false);
          } else {
            Toast.fail(" يرجى التاكد من المعلومات ", 2, null, false);
          }
          dispatch({
            type: "UPDATE_BASKET_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "UPDATE_BASKET_REJECTED", payload: err });
        });
    }
  };
}

//-------------------------------------------------------------
export function addItemToBasket(username, password, product, basket, option) {
  return function (dispatch) {
    if (product && basket) {
      const url = `${API}/_addToBasket.php?username=${username}&password=${password}&product_id=${product}&option[]=${option}&basket=${basket}`;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          if (response.data.success === 1) {
            Toast.success(" تم ", 2, null, false);
          } else {
            Toast.fail(" حاول مرة اخرا ", 2, null, false);
          }
          dispatch({
            type: "ADD_ITEM_TO_BASKET_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "ADD_ITEM_TO_BASKET_REJECTED", payload: err });
        });
    }
  };
}

export function removeItemFromBasket(username, password, product, basket) {
  // option = option ? option : product.options.id;
  return function (dispatch) {
    const url = `${API}/_deleteItemFromBasket.php?username=${username}&password=${password}&id=${product}&basket=${basket}`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        if (response.data.success === 1) {
          Toast.success(" تم ", 2, null, false);
        } else {
          Toast.fail(" حاول مرة اخرا ", 2, null, false);
        }        dispatch({
          type: "REMOVE_ITEM_FROM_BASKET_FULFILLED",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_ITEM_FROM_BASKET_REJECTED", payload: err });
      });
  };
}

export function clearBasketFromItems() {
  return function (dispatch) {
    let url = `${API}/myBasket/_clearBasket.php?username=07822816693&password=12345678`;
    // let url = `https://albarqexpress.com/store/api/_getBaskets.php?username=07822816693&password=12345678`;
    axios
      .get(url)
      .then((response) => {
        if (response.data.success === 1) {
          Toast.success(" تم ", 2, null, false);
        } else {
          Toast.fail(" حاول مرة اخرا ", 2, null, false);
        }        dispatch({
          type: "CLEAR_BASKET_FROM_ITEMS_FULFILLED",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "CLEAR_BASKET_FROM_ITEMS_REJECTED", payload: err });
      });
  };
}
export function AddTheFlagToListMethod(username, password, selectedFlag) {
  return function (dispatch) {
    const url = `${API}/favourite/createList/?username=${username}&password=${password}&listname=${selectedFlag.listname}&bg_color=${selectedFlag.bg_color}&font_color=${selectedFlag.font_color}`;

    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          if (response.data.success === 1) {
            Toast.success(" تم ", 2, null, false);
          } else {
            Toast.fail(" حاول مرة اخرا ", 2, null, false);
          }          dispatch({
            type: "ADD_NEW_FLAG_TO_LIST_FULFILLED",
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "ADD_NEW_FLAG_TO_LIST_REJECTED", payload: err });
        });
  };
}

//-------------------------------------------------------------
export function sendBasketToDB(
  username = "",
  password = "",
  basketId,
  discount
) {
  return function (dispatch) {
    let url = `${API}/_sendBasket.php?username=${username}&password=${password}&id=${basketId}&discount=${discount}`;
    console.log(url);
    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          if (response.data.success === 1) {
            Toast.success(" تم ", 2, null, false);
          } else {
            Toast.fail(" حاول مرة اخرا ", 2, null, false);
          }          dispatch({
            type: "SEND_BASKET_TO_DB_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "SEND_BASKET_TO_DB_REJECTED", payload: err });
        });
  };
}
//-------------------------------------------------------------
export function cencelSendBasketToDB(username = "", password = "", basketId) {
  return function (dispatch) {
    let url = `${API}/_cancelBasket.php?username=${username}&password=${password}&id=${basketId}`;
    console.log(url);
    if (username.length > 0)
      axios
        .get(url)
        .then((response) => {
          Toast.success(" تم ", 2, null, false);
          dispatch({
            type: "CENCEL_SEND_BASKET_TO_DB_FULFILLED",
            payload: response.data.data,
          });
        })
        .catch((err) => {
          dispatch({ type: "CENCEL_SEND_BASKET_TO_DB_REJECTED", payload: err });
        });
  };
}
//---------------------------------------------
export const selectedFlag = (val) => {
  return {
    type: "SELECTED_FLAG",
    payload: val,
  };
};
export const selectedNewFlag = (val) => {
  return {
    type: "SELECTED_NEW_FLAG",
    payload: val,
  };
};

//-------------------------------------------
export const selectedBasketMethod = (val) => {
  return {
    type: "SELECTED_BASKET",
    payload: val,
  };
};

//-------------------------------------------
let selectedBaskets = [];
export const all_selectedBasketsMethod = (val, isSending) => {
  if (val && isSending) selectedBaskets.push(val.id);
  else {
    const newList = selectedBaskets.filter((item) => item !== val.id);
    selectedBaskets = newList;
  }
  return {
    type: "ALL_SELECTED_BASKETS",
    payload: selectedBaskets,
  };
};
//-------------------------------------------
export const selectedOptionsMethods = (val) => {
  return {
    type: "SELECTED_OPTIONS",
    payload: val,
  };
};

export const activeProductMethod = (obj = {}, option = {}) => {
  return {
    type: "ACTIVE_PRODUCT",
    payload: {
      product: obj,
      options: option,
    },
  };
};
