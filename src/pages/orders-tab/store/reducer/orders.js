export default function (
  state = {
    fetched: false,
    error: null,
    orders: [],
    fetching: true,
  },
  action
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
