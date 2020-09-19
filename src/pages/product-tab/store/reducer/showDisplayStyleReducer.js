export default function (
  state = {
    show: false,
    grid:false
  },
  action
) {
  switch (action.type) {
    case "SHOW_STYLE_BAR": {
      return {
        ...state,
        show: action.payload.display,
        grid:action.payload.grid,
      };
    }
    default:
      return state;
  }
}
