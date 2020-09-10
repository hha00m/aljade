export default function (
    state = {
      fetched: false,
      error: null,
      baskets: [],
      fetching: true,
    },
    action 
  ) {
    switch (action.type) {
      case "FETCH_BASKETS_PADDING": {
        return { ...state, fetching: true };
      }
      case "FETCH_BASKETS_REJECTED": {
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
  