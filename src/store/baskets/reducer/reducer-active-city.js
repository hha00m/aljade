export default function (state = {}, action) {
  switch (action.type) {
    case "SELECTED_CITY": {
      if(action.payload.city){
      const results = action.payload.cities.find(
        (city_) => city_.label === action.payload.city
      );
      return results;
      }
      else return '';
    }
    default:
      return state;
  }
}
