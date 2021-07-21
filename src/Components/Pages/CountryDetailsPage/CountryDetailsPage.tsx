import { FC, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import useTypedSelector from "../../../redux/useTypedSelector";
import { findCountry } from "../../../redux/actions/countryActions";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

interface params {
  name: string;
}
interface Details {
  stat: string;
  value: string | number;
}

export const CountryDetailsPage: FC = () => {
  const dispatch = useDispatch();

  const { name } = useParams<params>();
  const history = useHistory();

  const country = useTypedSelector((state) => state.country.detailedCountry);
  const loading = useTypedSelector((state) => state.app.loading);

  useEffect(() => {
    (!country || country.name !== name) && dispatch(findCountry(name));
  }, [name]);
  console.log(name);

  if (loading || !country || country.name !== name) {
    return <Loader />;
  }

  const detailsMain: Array<Details> = [
    {
      stat: "Native name",
      value: country.nativeName,
    },
    {
      stat: "Population",
      value: country.population,
    },
    {
      stat: "Region",
      value: country.region,
    },
    {
      stat: "Sub Region",
      value: country.subregion,
    },
    {
      stat: "Capital",
      value: country.capital,
    },
  ];
  const detailsSecondary: Array<Details> = [
    {
      stat: "Top Level Domain",
      value: country.topLevelDomain.join(" "),
    },
    {
      stat: "Currencies",
      value: country.currencies.map((el) => el.name).join(" "),
    },
    {
      stat: "Languages",
      value: country.languages.map((el) => el.name).join(" "),
    },
  ];

  const renderDetails = (details: Array<Details>) => {
    return details.map((el) => (
      <div key={el.stat} className="country_content-stat">
        {`${el.stat}: `}
        <span className="country_content-stat-value">{el.value}</span>
      </div>
    ));
  };
  return (
    <div>
      <button
        onClick={() => {
          history.push("/");
        }}
        className="go-back"
      >
        <i className="fas fa-long-arrow-alt-left"></i>Back
      </button>
      <div className="content">
        <img className="flag" src={country.flag} alt={country.name} />
        <div className="details">
          <h2 className="details-title">{country.name}</h2>

          <div className="details-stats">
            <div className="details-stats_main">
              {renderDetails(detailsMain)}
            </div>
            <div className="details-stats_secondary">
              {renderDetails(detailsSecondary)}
            </div>
          </div>
          <div className="border-countries">
            <div className="border-countries_title">Border Countries</div>
            <div className="border-countries_values">
              {country.borders.map((border) => (
                <Link
                  to={`/details/${border}`}
                  className="border-countries_values-item"
                  key={border}
                >
                  {border}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
