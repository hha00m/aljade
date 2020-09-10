export default function (
  state = {
    user: {},
    fetching: false,
    fetched: false,
    error: null,
  },
  action = "FETCH_USER_DETAILS_PADDING"
) {
  switch (action.type) {
    case "FETCH_USER_DETAILS_PADDING": {
      return { ...state, fetching: true };
    }
    case "FETCH_USER_DETAILS_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_USER_DETAILS_FULFILLED": {
      return {
        ...state,
        fetched: true,
        fetching: false,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}
