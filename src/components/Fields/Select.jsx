import "./fields.css";
import { useLang } from "../../context/LangContext";

function Select({ label, initialValue, options, onChange, singleField, fieldSize = "medium" }) {
  const { lang } = useLang();

  const handleChange = (e) => {
    onChange?.(e.target.value);
  };
    
  return (
    <div className={`field-container ${singleField ? "single_field-container" : ""}`}>
      <div className="label_field-container">
        <label className="ec-label">{label}</label>
        <select 
          id={label} 
          value={initialValue} 
          className={`ec-field ec-field-${fieldSize}`} 
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {lang[option.name] || option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;