import { BsGlobe } from "react-icons/bs";
import "./network.css";
import { useLang } from "../../context/LangContext";
const Network = () => {
  const { lang } = useLang();

  return (
    <div className="main-container">

      <form id="Network" className="ec-form">
        <h1 className="form__title">
          {/* Reemplaza este texto por tu SVG */}
          <span className="title__icon-bg"><BsGlobe/></span>
          {lang.network}
        </h1>
        <div className="ec-form-content">
          <div className="field-container ec-border-bottom">
            <label htmlFor="field1">Field</label>
            <div className="ec-input-error-container">
              <div className="ec-input-container">
                <input
                  id="field1"
                  type="text"
                  className="ec-field form1-field"
                  placeholder="Field 1"
                />
                {/* Reemplaza este texto por tu SVG */}
                <span id="field1-error-icon" className="ec-invalid-feedback-icon hideElement">
                  Icono de Error
                </span>
              </div>
              <small className="ec-invalid-feedback-msg hideElement" id="field1-error-msg">
                Field cannot be empty
              </small>
            </div>
          </div>
          <div className="field-container">
            <label htmlFor="field2">Field</label>
            <div className="ec-input-error-container">
              <div className="ec-input-container">
                <input
                  id="field2"
                  type="text"
                  className="ec-field form1-field"
                  placeholder="Field 2"
                />
                {/* Reemplaza este texto por tu SVG */}
                <span id="field2-error-icon" className="ec-invalid-feedback-icon hideElement">
                  Icono de Error
                </span>
              </div>
              <small className="ec-invalid-feedback-msg hideElement" id="field2-error-msg">
                Field cannot be empty
              </small>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Network;

