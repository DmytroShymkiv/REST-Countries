interface Currencies {
  code: string;
  name: string;
  symbol: string;
}
interface Languages {
  name: string;
}
export interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currencies[];
  languages: Languages[];
  borders: string[];
  alpha3Code: string;
}

export interface CountryState {
  countries: Country[];
  region: string;
  name: string;
  detailedCountry: Country | undefined;
}

export enum actionsTypes {
  INITIAL = "initial",
  FILTER = "filter",
  SEARCH = "search",
  FIND = "find",
}

export interface initialAction {
  type: actionsTypes.INITIAL;
  payload: Country[];
}
export interface findAction {
  type: actionsTypes.FIND;
  payload: Country;
}
export interface filterAction {
  type: actionsTypes.FILTER | actionsTypes.SEARCH;
  payload: string;
}
export type countryAction = initialAction | filterAction | findAction;
