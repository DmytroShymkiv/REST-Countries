import {
  actionsTypes,
  filterAction,
  countryAction,
  Country,
} from "../types/countryTypes";
import { Dispatch } from "redux";
import axios from "axios";
import { startLoading, stopLoading } from "./actions";
import { appAction } from "../types/appTypes";

const serverRequest = async (
  dispatch: Dispatch<countryAction | appAction>,
  insideFunc: Function
) => {
  dispatch(startLoading());
  try {
    await insideFunc(dispatch);
  } catch (error) {
    console.log(error);
  }
  dispatch(stopLoading());
};

export const loadCountries = () => {
  return async (dispatch: Dispatch<countryAction | appAction>) => {
    const url = "https://restcountries.eu/rest/v2/all";
    const insideFunc = async (
      dispatch: Dispatch<countryAction | appAction>
    ) => {
      const response = await axios.get<Country[]>(url);
      dispatch({ type: actionsTypes.INITIAL, payload: response.data });
    };
    serverRequest(dispatch, insideFunc);
  };
};

export const findCountry = (name: string) => {
  return async (dispatch: Dispatch<countryAction | appAction>) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    const allCountriesUrl = "https://restcountries.eu/rest/v2/all";
    const insideFunc = async (
      dispatch: Dispatch<countryAction | appAction>
    ) => {
      const response = await axios.get<Country[]>(url);
      const allCountriesResponse = await axios.get<Country[]>(allCountriesUrl);
      const allCountriesData = allCountriesResponse.data;

      response.data[0].borders = response.data[0].borders.map<string>(
        (border) =>
          allCountriesData.find((country) => country.alpha3Code === border)
            ?.name || border
      );
      dispatch({ type: actionsTypes.FIND, payload: response.data[0] });
    };
    serverRequest(dispatch, insideFunc);
  };
};

export const filterCountries = (payload: string): filterAction => ({
  type: actionsTypes.FILTER,
  payload,
});
export const searchCountries = (payload: string): filterAction => ({
  type: actionsTypes.SEARCH,
  payload,
});
