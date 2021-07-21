import { actionsTypes, appAction, modes } from "../types/appTypes";

export const toggleDarkMode = (): appAction => {
  localStorage.setItem("mode", modes.DARK);
  return { type: actionsTypes.TOGGLE_DARK_MODE };
};
export const toggleLightMode = (): appAction => {
  localStorage.setItem("mode", modes.LIGHT);
  return { type: actionsTypes.TOGGLE_LIGHT_MODE };
};

export const startLoading = (): appAction => ({
  type: actionsTypes.START_LOADING,
});
export const stopLoading = (): appAction => ({
  type: actionsTypes.STOP_LOADING,
});
