export default function (
    state = {
      baskets: [],
      fetching: false,
      fetched: false,
      error: null,
    },
    action) {
    switch (action.type) {
      case "FETCH_BASKETS_PADDING": {
        return { ...state, fetching: true };
      }
      case "FETCH_BASKEGS_REJECTED": {
        return { ...state, fetching: false, error: action.payload };
      }
      case "FETCH_BASKETS_FULFILLED": {
        return {
          ...state,
          fetched: true,
          fetching: false,
          baskets: action.payload,
        };
      }
      default:
        return state;
    }
  }
  