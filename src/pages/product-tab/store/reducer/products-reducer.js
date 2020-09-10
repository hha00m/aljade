export default function (
  state = {
    fetched: false,
    error: null,
    products: [],
    fetching: true,
    height: (document.documentElement.clientHeight * 3) / 4,
  },
  action
) {
  switch (action.type) {
    case "FETCH_PRODUCTS_PADDING": {
      return { ...state, fetching: true };
    }
    case "FETCH_PRODUCS_REJECTED": {
      return { ...state, fetching: false,fetched: false, error: action.payload };
    }
    case "FETCH_PRODUCTS_FULFILLED": {
      return {
        ...state,
        fetched: true,
        fetching: false,
        products: action.payload,
      };
    }
    default:
      return state;
  }
}
