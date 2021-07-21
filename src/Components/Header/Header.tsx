import React, { FC } from "react";
import useTypedSelector from "../../redux/useTypedSelector";
import { useDispatch } from "react-redux";
import { toggleDarkMode, toggleLightMode } from "../../redux/actions/actions";
import { modes } from "../../redux/types/appTypes";

const Header: FC = () => {
  const mode = useTypedSelector((state) => state.app.mode);
  const dispatch = useDispatch();
  const handleSwitchModeClick = () => {
    const toggleFunction =
      mode === modes.LIGHT ? toggleDarkMode : toggleLightMode;
    dispatch(toggleFunction());
  };
  return (
    <header className="header">
      <div className="container header__content">
        <h1 className="header__logo">Where in the world?</h1>
        <div onClick={handleSwitchModeClick} className="header__theme-switch">
          <i className={mode === modes.LIGHT ? "far fa-moon" : "fas fa-moon"} />
          <div className="header__theme-switch_title">Dark Mode</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
