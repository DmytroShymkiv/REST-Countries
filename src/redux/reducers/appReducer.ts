import { actionsTypes, AppState, modes, appAction } from "../types/appTypes";

const initialState: AppState = {
  mode: localStorage.getItem("mode") || modes.DARK,
  loading: true,
};

const appReducer = (state = initialState, action: appAction): AppState => {
  switch (action.type) {
    case actionsTypes.TOGGLE_DARK_MODE:
      return { ...state, mode: modes.DARK };

    case actionsTypes.TOGGLE_LIGHT_MODE:
      return { ...state, mode: modes.LIGHT };

    case actionsTypes.START_LOADING:
      return { ...state, loading: true };

    case actionsTypes.STOP_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default appReducer;
