import "./Header.scss";
import menuBtn from "../../assets/svgs/menu-button.svg";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__logo">Abbey Architects</h2>
      <img className="header__menu-button" src={menuBtn} alt="" />
    </div>
  );
};

export default Header;
