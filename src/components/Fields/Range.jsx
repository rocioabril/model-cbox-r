import "./fields.css";
import LangContext from "../../context/LangContext";
import { useContext } from "react";

function Range({ label, description, initialValue, step, min, max, unit, onChange, singleField }) {
  const { lang } = useContext(LangContext);

  const handleNumberChange = (event) => {
    const newValue = event.target.value;
    onChange?.(parseFloat(newValue));
  };

  const handleNumberBlur = (event) => {
    let numericValue = parseFloat(event.target.value);

    if (isNaN(numericValue)) {
      numericValue = min;
    } else if (numericValue > max) {
      numericValue = max;
    } else if (numericValue < min) {
      numericValue = min;
    }

    onChange?.(numericValue);
  };

  const handleRangeChange = (event) => {
    const newValue = parseFloat(event.target.value);
    onChange?.(newValue);
  };

  return (
    <div className={`field-container ${singleField ? "single_field-container" : ""}`}>
      <div className="label_field-container">
        <div>
          <label className="ec-label">{label}</label>
          <div className="description">{description}</div>
        </div>
        <div className="inputs_range_num_container">
          <div className="numeric_inputs_containers">
            <input
              type="number"
              step={step}
              min={min}
              max={max}
              className="ec-field-range"
              value={initialValue}
              onChange={handleNumberChange}
              onBlur={handleNumberBlur}
            />
            <span>{lang[unit]}</span>
          </div>
          <input
            type="range"
            className="form-range"
            step={step}
            min={min}
            max={max}
            value={initialValue}
            onChange={handleRangeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Range;

