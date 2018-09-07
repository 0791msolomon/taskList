import { ALLPEOPLE, ADDED_PERSON, SEARCH_PEOPLE } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case ALLPEOPLE:
      return action.payload.items;

    case ADDED_PERSON: {
      return [...state, action.payload];
    }
    case SEARCH_PEOPLE:
      return action.payload;

    default:
      return state;
  }
}
