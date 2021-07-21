export enum actionsTypes {
  TOGGLE_DARK_MODE = "dark mode",
  TOGGLE_LIGHT_MODE = "light mode",
  START_LOADING = "loading start",
  STOP_LOADING = "loading stop",
}

export interface appAction {
  type: actionsTypes;
}

export enum modes {
  DARK = "dark",
  LIGHT = "light",
}

export interface AppState {
  mode: modes | string;
  loading: boolean;
}
