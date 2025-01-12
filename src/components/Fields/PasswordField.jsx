import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import useFieldValidation from "../../hooks/useFieldValidation";
import { useContext } from "react";
import LangContext from "../../context/LangContext";

function PasswordField({ label, initialValue, onChange, validations = [], singleField, name }) {
  // Mantenemos el estado local solo para la visibilidad del password
  const [showPassword, setShowPassword] = useState(false);
  const { isValid, validateField, startValidating } = useFieldValidation(initialValue, validations);
  const { lang } = useContext(LangContext);

  const handleChange = (e) => {
    onChange?.(e.target.value);
    startValidating();
    validateField();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`field-container ${singleField ? "single_field-container" : ""}`}>
      <div className="label_field-container">
        <label className="ec-label">{lang[label]}</label>
        <div className="ec-input-error-container">
          <div className="ec-input-container">
            <div className="password-field-container">
              <input
                type={showPassword ? "text" : "password"}
                value={initialValue}
                name={name}
                placeholder={lang[label]}
                className={`ec-field ${!isValid ? "ec-invalid-feedback" : ""}`}
                onChange={handleChange}
              />
              <button 
                className="password-toggle-btn" 
                onClick={togglePasswordVisibility}
                type="button"
              >
                {showPassword ? (
                  <BsEyeSlashFill className="eye-icon" />
                ) : (
                  <BsEyeFill className="eye-icon" />
                )}
              </button>
            </div>
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

export default PasswordField;