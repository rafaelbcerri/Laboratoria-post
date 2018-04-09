import { combineReducers } from "redux"

import login from "./loginReducer"
import posts from "./postsReducer"

export default combineReducers({
  login,
  posts
})
