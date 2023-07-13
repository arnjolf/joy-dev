import Clip from "../../images/Clip-icon.svg";

export default function Form() {
  return (
    <form className="form" encType="multipart/form-data" method="post">
      <input
        type="text"
        placeholder="Ваше имя *"
        className="form__input form__input_name"
      ></input>
      <input
        type="text"
        placeholder="Номер телефона *"
        className="form__input form__input_phone"
      ></input>
      <input
        type="text"
        placeholder="Расскажите немного о вашей идее"
        className="form__input form__input_idea"
      ></input>
      <label for="file" className="form__files-label">
        <img className="form__clip" src={Clip} />
        Прикрепить файлы (до 10 шт)
      </label>
      <input id="file" name="file" type="file" className="form__files" />
      <p className="form__file-types">
        Пожалуйста, загрузите файл формата: .pdf, .docx, .odt, .ods, .xls/x,.txt
      </p>
      <label class="form__checkbox">
        <input
          type="checkbox"
          className="form__checkbox-label"
          value="value-1"
        ></input>
        <span>Indigo</span>
      </label>
      <p className="form__accept-politics">
        Я принимаю&nbsp;
        <a href="#" className="form__politics">
          Политику конфиденциальности
        </a>
      </p>
      <button type="submit" className="form__submit-button">
        Отправить
      </button>
    </form>
  );
}
