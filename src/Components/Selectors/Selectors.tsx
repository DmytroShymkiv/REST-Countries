import { MouseEvent, ChangeEvent } from "react";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterCountries,
  searchCountries,
} from "../../redux/actions/countryActions";
import useTypedSelector from "../../redux/useTypedSelector";

export const Selectors: FC = () => {
  const allCountriesLiteral = "All";

  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const region = useTypedSelector((state) => state.country.region);
  const inputName = useTypedSelector((state) => state.country.name);
  const dispatch = useDispatch();

  const activeStyles = {
    arrow: {
      transform: isDropDownActive ? "rotateZ(-180deg)" : "",
    },
    dropDown: {
      maxHeight: isDropDownActive ? "300px" : "",
    },
  };

  const handleDropdownClick = () => {
    setIsDropDownActive((prev) => !prev);
  };

  const handleFilterRegionClick = (event: MouseEvent<HTMLLIElement>) => {
    const liText = event.currentTarget.innerText;
    const region: string = liText === allCountriesLiteral ? "" : liText;
    setIsDropDownActive(false);
    dispatch(filterCountries(region));
  };

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const name = event.target.value;
    dispatch(searchCountries(name));
  };

  return (
    <div className="selector">
      <div className="selector_search">
        <i className="fas fa-search" />
        <input
          onChange={handleNameInput}
          placeholder="Search for a country"
          type="text"
          value={inputName}
        />
      </div>
      <div className="selector_filter">
        <div onClick={handleDropdownClick} className="selector_filter_main">
          {region ? region : "Filter by Region"}
          <i
            style={{ ...activeStyles.arrow }}
            className="fas fa-chevron-down"
          />
        </div>
        <ul
          style={{ ...activeStyles.dropDown }}
          className="selector_filter_dropdown"
        >
          {[
            allCountriesLiteral,
            "Africa",
            "Americas",
            "Asia",
            "Europe",
            "Oceania",
          ].map((region) => (
            <li
              onClick={handleFilterRegionClick}
              className="selector_filter_dropdown-item"
              key={region}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
