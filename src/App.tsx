import "./style/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useTypedSelector from "./redux/useTypedSelector";

import Header from "./Components/Header/Header";
import { MainPage } from "./Components/Pages/MainPage";
import { CountryDetailsPage } from "./Components/Pages/CountryDetailsPage/CountryDetailsPage";

function App() {
  const mode = useTypedSelector((state) => state.app.mode);

  return (
    <div className={`theme--${mode}`}>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route exact path="/details/:name">
                <CountryDetailsPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
