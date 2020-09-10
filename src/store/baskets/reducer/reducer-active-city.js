export default function (state = {}, action) {
  switch (action.type) {
    case "SELECTED_CITY": {
      const results = action.payload.cities.find(
        (city_) => city_.label === action.payload.city
      );
      return results;
    }
    default:
      return state;
  }
}
