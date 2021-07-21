import { FC } from "react";

import { Country } from "../../redux/types/countryTypes";
export const CountryCard: FC<Country> = (country: Country) => {
  return (
    <div className="country">
      <img className="country_flag" src={country.flag} alt={country.name} />
      <div className="country_content">
        <h2 className="country_content-title">{country.name}</h2>
        <div className="country_content-stat">
          Population:{` `}
          <span className="country_content-stat-value">
            {country.population}
          </span>
        </div>
        <div className="country_content-stat">
          Region:{` `}
          <span className="country_content-stat-value">{country.region}</span>
        </div>
        <div className="country_content-stat">
          Capital:{` `}
          <span className="country_content-stat-value">{country.capital}</span>
        </div>
      </div>
    </div>
  );
};
