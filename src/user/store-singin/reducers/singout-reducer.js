
export default function (
    state = {
      isLogout: false,
    },
    action 
  ) {
    switch (action.type) {
    
      case "SINOUT_FULFILLED": {
        return {
          ...state,
          isLogout: action.payload,
        };
      }
      default:
        return state;
    }
  }