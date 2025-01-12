import useFieldValidation from "../../hooks/useFieldValidation";
import { FaExclamationCircle } from "react-icons/fa";
import LangContext from "../../context/LangContext";
import { useContext } from "react";

function TextField({
  label,
  initialValue = "",
  onChange,
  validations = [],
  singleField,
  name,
  fieldSize = "medium"
}) {
  const { isValid, validateField, startValidating } = useFieldValidation(initialValue, validations);
  const { lang } = useContext(LangContext);

  const fieldClass = fieldSize ? `ec-field-${fieldSize}` : '';

  const handleChange = (e) => {
    onChange?.(e.target.value);
    startValidating();
    validateField();
  };

  return (
    <div
      className={`field-container ${
        singleField ? "single_field-container" : ""
      }`}
    >
      <div className="label_field-container">
        <label className="ec-label">{lang[label]}</label>
        <div className="ec-input-error-container">
          <div className="ec-input-container">
            <input
              type="text"
              value={initialValue}
              name={name}
              placeholder={lang[label]}
              className={`ec-field ${fieldClass} ${!isValid ? "ec-invalid-feedback" : ""}`}
              onChange={handleChange}
            />
            {!isValid && (
              <FaExclamationCircle className="ec-invalid-feedback-icon" />
            )}
          </div>
          {!isValid && <small className="ec-invalid-feedback-msg">{lang.error_feedback[label]}</small>}
        </div>
      </div>
    </div>
  );
}

export default TextField;


