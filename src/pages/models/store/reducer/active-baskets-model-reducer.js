export default function (state = {
  show:false}, action) {
  switch (action.type) {
    case "ACTIVE_BASKET_MODEL": {
      return {show:action.payload};
    }

    default:
      return state;
  }
}
