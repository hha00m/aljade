export default function (state = {}, action) {
  switch (action.type) {
    case "SELECTED_TOWN":{
       return action.payload;
     }
      default:return state;
  }
}
