export default function (state = [], action) {
    switch (action.type) {
     case "ALL_SELECTED_BASKETS": {
        return action.payload;
      }
      default:
        return state;
    }
  }
  