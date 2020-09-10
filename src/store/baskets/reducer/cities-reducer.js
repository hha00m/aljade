export default function (
  state = {
    cities: [],
    fetching: false,
    fetched: false,
    error: null,
  },
  action) {
  switch (action.type) {
    case "FETCH_CITIES_PADDING": {
      return { ...state, fetching: true };
    }
    case "FETCH_CITIES_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_CITIES_FULFILLED": {
      return {
        ...state,
        fetched: true,
        fetching: false,
        cities: action.payload,
      };
    }
    default:
      return state;
  }
}
