import appReducer from "./appReducer";
import countryReducer from "./countryReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
  country: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
