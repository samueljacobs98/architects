import "./Header.scss";
import useWindowSize from "../../assets/hooks/useWindowSize.js";
import menuBtn from "../../assets/svgs/menu-button.svg";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__logo">Abbey Architects</h2>
      {useWindowSize(768) ? (
        <ul className="header__nav">
          <li className="header__nav-item">Projects</li>
          <li className="header__nav-item">Contact</li>
        </ul>
      ) : (
        <img className="header__menu-button" src={menuBtn} alt="" />
      )}
    </div>
  );
};

export default Header;
