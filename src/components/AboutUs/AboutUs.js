import telegram from "../../images/telegram-icon.svg";
import behance from "../../images/behance-icon.svg";
import dribbble from "../../images/dribbble-icon.svg";
import vc from "../../images/vc.ru-icon.svg";
import vk from "../../images/vk-icon.svg";
import hubr from "../../images/hubr-icon.svg";
import hh from "../../images/hh-icon.svg";

import Form from "../Form/Form";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__main">
        <h2 className="about-us__title">
          Наша команда разработала приложение для ОС Android
        </h2>
        <div className="about-us__circle-img">
          <div className="about-us__techn">
            <p className="about-us__techn-text">
              Технологии:&nbsp;
              <span className="about-us__techn-span">
                MVVM, Retrofit, Kotlin Coroutines, Pagging 3, Socket.io, Room
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="about-us__info">
        <div className="about-us__contacts">
          <h3 className="about-us__contacts-title">Контакты</h3>
          <p className="about-us__telegram">
            Telegram
            <img
              className="about-us__telegram-icon"
              src={telegram}
              alt="Иконка телеграм"
            />
          </p>
          <p className="about-us__phone">8 800 234 32 62</p>
          <p className="about-us__email">hello@joy-dev.com</p>
          <p className="about-us__adress">
            Россия, 127282, Москва г, Студёный проезд, дом 4, корпус 1, Э 1/ПОМ
            V/К 14/ОФ 87
          </p>
          <p className="about-us__subscribe">Подписывайтесь</p>
          <ul className="about-us__list">
            <li>
              <a href="#">
                <img src={behance} className="about-us__icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={dribbble} className="about-us__icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={vc} className="about-us__icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={vk} className="about-us__icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={hubr} className="about-us__icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={hh} className="about-us__icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="about-us__form-box">
          <h3 className="about-us__form-title">Давайте знакомиться!</h3>
          <p className="about-us__form-subtitle">
            Мы всегда рады сотрудничеству и новым проектам
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
