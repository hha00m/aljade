export default function (
    state = {
      flags: [],
      fetching: false,
      fetched: false,
      error: null,
    },
    action = "FETCH_FLAGS_PADDING"
  ) {
    switch (action.type) {
      case "FETCH_FLAGS_PADDING": {
        return { ...state, fetching: true };
      }
      case "FETCH_FLAGS_REJECTED": {
        return { ...state, fetching: false, error: action.payload };
      }
      case "FETCH_FLAGS_FULFILLED": {
        return {
          ...state,
          fetched: true,
          fetching: false,
          flags: action.payload,
        };
      }
      default:
        return state;
    }
  }
  