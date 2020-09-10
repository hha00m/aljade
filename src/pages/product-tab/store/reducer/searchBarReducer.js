export default function (
  state = {
    show: false,
  },
  action
) {
  switch (action.type) {
    case "SHOW_SEARCH_BAR": {
      return {
        ...state,
        show: action.payload,
      };
    }
    default:
      return state;
  }
}
