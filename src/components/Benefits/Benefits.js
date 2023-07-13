import React from "react";
import { useMediaQuery } from "react-responsive";

import BenefitsBlured from "../../images/BenefitsBlured.png";
import ProfileIcon from "../../images/profile-icon.svg";
import RegIcon from "../../images/reg-icon.svg";
import CheckboxIcon from "../../images/checkbox-icon.svg";
import ChatBot from "../../images/proto-chat.png";
import IconsGroup from "../../images/benefits-iconsGroup.svg";
import Poll from "../../images/Poll(opros).png";
import IconsGroup320 from "../../images/Group320px.svg";

export default function Benefits() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="benefits">
      <div className="benefits__box">
        <img
          src={BenefitsBlured}
          alt="Чат-бот"
          className="benefits__bluered-image"
        />
        <div className="benefits__box-content">
          <h2 className="benefits__title">
            Фишка проекта
            <span className="benefits__span"> чат-бот</span>
          </h2>
          <p className="benefits__text">
            Хелп-деск помогает пользователям заполнять данные
          </p>
          <ul className="benefits__list">
            <li className="benefits__list-element">
              <img
                src={ProfileIcon}
                alt="Иконка профиля"
                className="benefits__list-icon"
              />
              Личные данные
            </li>
            <li className="benefits__list-element">
              <img
                src={RegIcon}
                alt="Иконка регистрации"
                className="benefits__list-icon"
              />
              Регистрация
            </li>
            <li className="benefits__list-element">
              <img
                src={CheckboxIcon}
                alt="Иконка опроса"
                className="benefits__list-icon"
              />
              Опросы
            </li>
          </ul>
        </div>
      </div>
      <div className="benefits__box benefits__box_questions">
        <div className="benefits__questions">
          <img
            src={isMobile ? IconsGroup320 : IconsGroup}
            className="benefits__icon-group"
            alt="Группа иконок"
          />
          <div className="clover__dash" />
          <h2 className="benefits__title">Разные виды вопросов</h2>
          <ul className="benefits__list benefits__list_questions">
            <li>Скринеры определяют, подходит ли пользователю опрос</li>
            <li>
              С простыми или условными переходами зависят от ответов
              пользователей
            </li>
          </ul>
          <p className="benefits__text green-border">Прост в использовании</p>
        </div>
        <div className="benefits__screenshots">
          <img
            src={Poll}
            alt="Демонстрация опросов"
            className="benefits__screenshot"
          />
          <img
            src={ChatBot}
            alt="Демонстрация чат-бота"
            className="benefits__screenshot"
          />
        </div>
      </div>
    </div>
  );
}
