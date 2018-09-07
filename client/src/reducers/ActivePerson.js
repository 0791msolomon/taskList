import { ACTIVE_PERSON } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case ACTIVE_PERSON:
      return action.payload;

    default:
      return state;
  }
}
