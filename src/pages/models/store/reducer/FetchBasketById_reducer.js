export default function (
  state = {
    basket: {},
    action: false,
  },
  action
) {
  switch (action.type) {
    case "FETCH_BASKET_BY_ID_FULFILLED": {
      return { basket: action.payload };
    }
    case "FETCH_BASKET_BY_ID__REJECTED": {
      return { basket: action.payload };
    }

    default:
      return state;
  }
}
