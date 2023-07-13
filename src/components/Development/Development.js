import UserRegister from "../../images/DevUserRegister.svg";
import ActualPoll from "../../images/DevActualPoll.svg";
import ChatBot from "../../images/DevChatBot.svg";
import PollDif from "../../images/DevPollDiff.svg";
import LiveAnalitics from "../../images/DevLiveAnalitics.svg";
import Carousel from "../Carousel/Carousel";

import carousel1proto from "../../images/carousel-1-proto.svg";
import carousel1ready from "../../images/carousel-1-ready.svg";
import carousel2proto from "../../images/carousel-2-proto.svg";
import carousel2ready from "../../images/carousel-2-ready.svg";
import carousel3proto from "../../images/carousel-3-proto.svg";
import carousel3ready from "../../images/carousel-3-ready.svg";

export default function Development() {
  return (
    <div className="development">
      <h2 className="development__title">
        От прототипов <br /> до уникального дизайна
      </h2>
      <Carousel>
        <div className="carousel__item">
          <img className="carousel__item-content" src={carousel1proto} />
          <img className="carousel__item-content" src={carousel1ready} />
        </div>
        <div className="carousel__item">
          <img className="carousel__item-content" src={carousel2proto} />
          <img className="carousel__item-content" src={carousel2ready} />
        </div>
        <div className="carousel__item">
          <img className="carousel__item-content" src={carousel3proto} />
          <img className="carousel__item-content" src={carousel3ready} />
        </div>
      </Carousel>
      <div className="development__functions">
        <div className="clover__dash" />
        <h2 className="development__subtitle">Функционал Clover Research</h2>
        <ul className="development__list">
          <li className="development__list-element">
            <img className="development__list-icon" src={UserRegister} />
            Регистрация пользователя
          </li>
          <li className="development__list-element">
            <img className="development__list-icon" src={ActualPoll} />
            Получение актуальных опросов по тематике
          </li>
          <li className="development__list-element">
            <img className="development__list-icon" src={ChatBot} />
            Помощь с заполнением данных через чат-бот онлайн
          </li>
          <li className="development__list-element">
            <img className="development__list-icon" src={PollDif} />
            Разделение опросов для разных специалистов
          </li>
          <li className="development__list-element">
            <img className="development__list-icon" src={LiveAnalitics} />
            Сбор данных для live-аналитики
          </li>
        </ul>
      </div>
    </div>
  );
}
