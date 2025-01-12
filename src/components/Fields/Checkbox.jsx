import "./fields.css";
import LangContext from "../../context/LangContext";
import { useContext } from "react";


function Checkbox({ label, description, initialValue, onChange, singleField }) {
  const { lang } = useContext(LangContext);

  const handleChange = (e) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className={`field-container ${singleField ? "single_field-container" : ""}`}>
      <div className="label_field-container type-checkbox">
        <div>
          <label className="ec-label">{lang[label]}</label>
          <div className="description">{lang[description]}</div>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={initialValue}
            onChange={handleChange}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
