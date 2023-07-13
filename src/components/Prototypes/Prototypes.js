import ProtoChat from "../../images/proto-chat.png";
import ProtoSurvey from "../../images/proto-survey.png";
import ProtoLogin from "../../images/proto-login.png";
import ProtoPhones from "../../images/proto-grey-phones.png";
import ProtoBoard from "../../images/prototypes-board-n-clovers.png";

export default function Prototypes() {
  return (
    <div className="prototypes">
      <div className="prototypes__examples">
        <img src={ProtoChat} className="prototype__example" />
        <img src={ProtoLogin} className="prototype__example" />
        <img src={ProtoSurvey} className="prototype__example" />
      </div>
      <div className="prototypes__main">
        <h2 className="prototypes__title">30+</h2>
        <span className="prototypes__span">прототипов</span>
        <p className="prototypes__text">
          Провели UX-аналитику, предусмотрели все сценарии использования
        </p>
        <img className="prototypes__grey-phones" src={ProtoPhones} />
      </div>
      <div className="prototypes__list-box">
        <div className="prototypes__box-content">
          <div className="clover__dash" />
          <h2 className="prototypes__subtitle">
            Зачем нужны опросники для врачей?
          </h2>
          <ul className="prototypes__list">
            <li>Опыт использования медицинских препаратов</li>
            <li>Социологические исследования</li>
            <li>Live - аналитика</li>
          </ul>
        </div>
        <img className="prototypes__board-image" src={ProtoBoard} />
      </div>
    </div>
  );
}
