import {
  CountryState,
  countryAction,
  actionsTypes,
  Country,
} from "../types/countryTypes";

const initialState: CountryState = {
  countries: [],
  region: "",
  name: "",
  detailedCountry: undefined,
};

let allCountries: Country[] = [];

const countryReducer = (
  state = initialState,
  action: countryAction
): CountryState => {
  switch (action.type) {
    case actionsTypes.INITIAL: {
      allCountries = action.payload;
      return { ...state, countries: action.payload };
    }

    case actionsTypes.FILTER: {
      const filterFunc = (country: Country) => {
        const regionEquals =
          action.payload === "" ? true : country.region === action.payload;
        let nameEquals = true;
        if (state.name)
          nameEquals = country.name
            .toLowerCase()
            .startsWith(state.name.toLowerCase());
        return nameEquals && regionEquals;
      };
      return {
        ...state,
        countries: allCountries.filter(filterFunc),
        region: action.payload,
      };
    }

    case actionsTypes.SEARCH: {
      const filterFunc = (country: Country) => {
        const nameEquals = country.name
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
        let regionEquals = true;
        if (state.region) {
          regionEquals = country.region === state.region;
        }
        return nameEquals && regionEquals;
      };
      return {
        ...state,
        countries: allCountries.filter(filterFunc),
        name: action.payload,
      };
    }

    case actionsTypes.FIND: {
      return {
        ...state,
        detailedCountry: action.payload,
      };
    }

    default:
      return state;
  }
};

export default countryReducer;
