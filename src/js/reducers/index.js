import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import percs from "./percsReducer"

export default combineReducers({
  tweets,
  user,
  percs,
})
