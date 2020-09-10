export default function (state = {}, action) {
    switch (action.type) {
      case "SELECTED_BASKET": {
        return action.payload;
      } 
      default:
        return state;
    }
  }
  