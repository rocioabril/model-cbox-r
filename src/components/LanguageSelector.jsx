import { BsTranslate } from "react-icons/bs";
import { useLang } from "../context/LangContext.jsx";

function LanguageSelector() {
  const { setLang } = useLang();

  const handleChange = (event) => {
    console.log(event.target.value);
    setLang(event.target.value);
  };

  return (
    <div className="ec-sidebar__select-lang-container">
      <BsTranslate />
      <select
        onChange={handleChange}
        name="select-lang"
        id="select-lang"
        className="ec-sidebar__select-lang"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
