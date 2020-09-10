export default function (state = {}, action) {
    switch (action.type) {
      case "ACTIVE_PRODUCT": {
        return action.payload;
      }
    
      default:
        return state;
    }
  }
  