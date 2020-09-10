export default function (
  state = {
    fetched: false,
    error: null,
    fetching: true,
    data:{}
  },
  action
) {
  switch (action.type) {
    case "ADD_ITEM_TO_BASKET_FULFILLED": {
      return { data:action.payload, fetching: false,fetched:true };
    }
    case "ADD_ITEM_TO_BASKET_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "REMOVE_ITEM_FROM_BASKET_FULFILLED": {
      return { data:action.payload, fetching: false,fetched:true };
    }
    case "REMOVE_ITEM_FROM_BASKET_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }

    case "CLEAR_BASKET_FROM_ITEMS_FULFILLED": {
      return { data:action.payload, fetching: false,fetched:true };
      }
      case "CLEAR_BASKET_FROM_ITEMS_REJECTED": {
        return { ...state, fetching: false, error: action.payload };
      }

      case "SEND_BASKET_TO_DB_FULFILLED": {
        return { data:action.payload, fetching: false,fetched:true };
      }
      case "SEND_BASKET_TO_DB_REJECTED": {
        return { ...state, fetching: false, error: action.payload };
      }

      case "CENCEL_SEND_BASKET_TO_DB_FULFILLED": {
        return { data:action.payload, fetching: false,fetched:true };
      }
      case "CENCEL_SEND_BASKET_TO_DB_REJECTED": {
        return { ...state, fetching: false, error: action.payload };
      }  
      case "SELECTED_BASKET": {
        return { data:action.payload, fetching: false,fetched:true };
      }
      case "ALL_SELECTED_BASKET": {
        return { data:action.payload, fetching: false,fetched:true };
      }

    default:
      return state;
  }
}
