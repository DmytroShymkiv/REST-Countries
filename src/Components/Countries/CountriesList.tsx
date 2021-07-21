import { FC } from "react";
import useTypedSelector from "../../redux/useTypedSelector";
import { CountryCard } from "./Country";
import { Link } from "react-router-dom";

export const CountriesList: FC = () => {
  const countries = useTypedSelector((state) => state.country.countries);
  return (
    <div className="country-list">
      {countries.map((country) => (
        <Link key={country.name} to={`/details/${country.name}`}>
          <CountryCard {...country} />
        </Link>
      ))}
    </div>
  );
};
