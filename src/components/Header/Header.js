import Logo from "../../images/Group.svg";
import Arrow from "../../images/HeaderArrow.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__main">
        <img src={Logo} alt="Логотип" className="header__logo" />
        <div className="header__fast-menu">
          <button className="header__button">Заказать разработку</button>
          <button className="header__menu"></button>
        </div>
      </div>
      <div className="line"></div>
      <div className="header__nav">
        <ul className="header__current-nav">
          <li className="header__nav-text">Главная</li>
          <li>
            <img src={Arrow} alt="Стрелочка" className="header__arrow" />
          </li>
          <li className="header__nav-text">Кейсы</li>
          <li>
            <img src={Arrow} alt="Стрелочка" className="header__arrow" />
          </li>
          <li className="header__nav-text">Clover Research</li>
        </ul>
      </div>
    </header>
  );
}
