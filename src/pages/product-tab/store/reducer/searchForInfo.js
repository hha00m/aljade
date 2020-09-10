export default function (
    state = {data:''},
    action
  ) {
    switch (action.type) {
      case "SEARCH_FOR_INFO": {
        return {
          data:action.payload,
        };
      }
      default:
        return state;
    }
  }