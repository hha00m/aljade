import axios from "axios";
 
export const addFlagToProductMethod = (flag_id, product_id) => {
  return function (dispatch) {
    axios
      .get(
        `https://albarqexpress.com/store/api/?username=07822816693&password=12345678&flag=${flag}`
      )
      .then((response) => {
        dispatch({ type: "ADD_FLAG_TO_PRODUCT_FULFILLED", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "ADD_FLAG_TO_PRODUCT_REJECTED", payload: err });
      });
  };
};

export const removeFlagFromProductMethod = (flag_id, product_id) => {
  return function (dispatch) {
    axios
      .get(
        `https://albarqexpress.com/store/api/?username=07822816693&password=12345678&flag=${flag}`
      )
      .then((response) => {
        dispatch({ type: "REMOVE_FLAG_FROM_PRODUCT_FULFILLED", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_FLAG_FROM_PRODUCT_REJECTED", payload: err });
      });
  };
};

export const createNewFlagMethod = (flag) => {
  return function (dispatch) {
    axios
      .get(
        `https://albarqexpress.com/store/api/?username=07822816693&password=12345678&flag=${flag}`
      )
      .then((response) => {
        dispatch({ type: "ADD_NEW_FLAG_FULFILLED", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "ADD_NEW_FLAG_REJECTED", payload: err });
      });
  };
};

export const removeOldFlagMethod = (flag_id) => {
  return function (dispatch) {
    axios
      .get(
        `https://albarqexpress.com/store/api/?username=07822816693&password=12345678&flagId=${flag_id}`
      )
      .then((response) => {
        dispatch({ type: "REMOVE_OLD_FLAG_FULFILLED", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "REMOVE_OLD_FLAG_REJECTED", payload: err });
      });
  };
};

export function fetchingFlagsMethod() {
  return function (dispatch) {
    axios
      .get(
        "https://albarqexpress.com/store/api/?username=07822816693&password=12345678"
      )
      .then((response) => {
        dispatch({ type: "FETCH_FLAGS_FULFILLED", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FLAGS_REJECTED", payload: err });
      });
  };
}
