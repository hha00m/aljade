export default function (
    state = {
      basket: {},
      action: false,
    },
    action
  ) {
    switch (action.type) {
        case "CREATE_NEW_BASKET_FULFILLED": {
            return { basket: action.payload };
          }
          case "CREATE_NEW_BASKET_REJECTED": {
            return { basket: action.payload };
          }
          case "REMOVE_BASKET_FROM_DB_FULFILLED": {
            return { basket: action.payload };
          }
          case "REMOVE_BASKET_FROM_DB_REJECTED": {
            return { basket: action.payload };
          }
          case "UPDATE_BASKET_FULFILLED": {
            return { basket: action.payload };
          }
          case "UPDATE_BASKET_REJECTED": {
            return { basket: action.payload };
          }
  
      default:
        return state;
    }
  }
  