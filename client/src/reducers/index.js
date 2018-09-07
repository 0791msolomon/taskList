import { combineReducers } from "redux";
import AllPeople from "./AllPeople";
import ActivePerson from "./ActivePerson";
const rootReducer = combineReducers({
  allPeople: AllPeople,
  ActivePerson
});
export default rootReducer;
