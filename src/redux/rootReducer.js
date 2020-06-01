import { combineReducers } from "redux";
import movie from "./movie/reducer";
import list from "./list/reducer";
import streaming from "./streaming/reducer";

export default combineReducers({
  movie,
  list,
  streaming
});
