import { FC, useEffect } from "react";

import { useDispatch } from "react-redux";
import useTypedSelector from "../../redux/useTypedSelector";

import { Selectors } from "../Selectors/Selectors";
import { CountriesList } from "../Countries/CountriesList";
import { loadCountries } from "../../redux/actions/countryActions";
import Loader from "../Loader/Loader";
export const MainPage: FC = () => {
  const loading = useTypedSelector((state) => state.app.loading);
  const countries = useTypedSelector((state) => state.country.countries);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(countries);

    countries.length === 0 && dispatch(loadCountries());
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Selectors />
      <CountriesList />
    </div>
  );
};
