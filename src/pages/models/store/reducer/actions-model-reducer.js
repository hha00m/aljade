export default function (state = {
  model:{},
  action:false
}, action) {
  switch (action.type) {
    case "ACTIVE_MODEL": {
      return {model:action.payload,action:true};
    }
    case "CLOSE_MODEL": {
      return {model:action.payload,action:false};
    }

    default:
      return state;
  }
}
