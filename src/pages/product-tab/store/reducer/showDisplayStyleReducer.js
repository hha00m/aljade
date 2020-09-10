export default function (
  state = {
    show: false,
  },
  action
) {
  switch (action.type) {
    case "SHOW_STYLE_BAR": {
      return {
        ...state,
        show: action.payload,
      };
    }
    default:
      return state;
  }
}
