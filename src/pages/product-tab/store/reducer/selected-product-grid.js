export default function (
    state = {data:''},
    action
  ) {
    switch (action.type) {
      case "SELECTED_PRODUCT_GRID": {
        return {
          data:action.payload,
        };
      }
      default:
        return state;
    }
  }