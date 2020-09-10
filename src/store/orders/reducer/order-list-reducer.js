export default function (
    state = {
      flags: [],
      fetching: false,
      fetched: false,
      error: null,
    },
    action = "FETCH_ORDERS_PADDING"
  ) {
    switch (action.type) {
      case "FETCH_ORDERS_PADDING": {
        return { ...state, fetching: true };
      }
      case "FETCH_ORDERS_REJECTED": {
        return { ...state, fetching: false, error: action.payload };
      }
      case "FETCH_ORDERS_FULFILLED": {
        return {
          ...state,
          fetched: true,
          fetching: false,
          orders: action.payload,
        };
      }
      default:
        return state;
    }
  }
  