export default function (
    state = {
      fetched: false,
      error: null,
      user: {},
      fetching: true,
    },
    action 
  ) {
    switch (action.type) {
      case "SINGIN_WITH_DB_PADDING": {
        return { ...state, fetching: true };
      }
      case "SINGIN_WITH_DB_REJECTED": {
        return { ...state, fetching: false, error: action.payload };
      }
      case "SINGIN_WITH_DB_FULFILLED": {
        return {
          ...state,
          fetched: true,
          fetching: false,
          user: action.payload,
        };
      }
      case "SIGNOUT_FULFILLED": {
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