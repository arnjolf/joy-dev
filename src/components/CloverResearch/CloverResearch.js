import GreenLines from "../../images/GreenLines.png";
import GreyLines from "../../images/GreyLines.png";
import Hand from "../../images/Hand.png";
import Title from "../../images/Title.svg";
import Leaf from "../../images/CloverLeaf.png";

export default function CloverResearch() {
  return (
    <div className="clover">
      <div className="clover__green-lines" />
      <div className="clover__grey-lines" />
      <div className="clover__hand-n-leaf">
        <img alt="Рука с телефоном" src={Hand} className="clover__hand" />
        <img alt="Листочек" src={Leaf} className="clover__leaf" />
      </div>
      <div className="clover__content">
        <img alt="Заголовок" src={Title} className="clover__title" />
        <div className="clover__header">
          <div className="clover__dash" />
          <h2 className="clover__bold-text">
            Что такое <br /> Clover Research?
          </h2>
        </div>
        <div className="clover__about">
          <p className="clover__text">
            Маркетинговые исследования в медицине и фармацевтике
          </p>
          <p className="clover__text green-border">Целевая аудитория - врачи</p>
        </div>
      </div>
    </div>
  );
}
