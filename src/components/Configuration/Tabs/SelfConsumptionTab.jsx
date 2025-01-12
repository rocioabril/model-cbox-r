import { Modal } from "react-bootstrap";
import AdvanceSetup from "./AdvanceSetup";
import { useContext, useState } from "react";
import Checkbox from "../../Fields/Checkbox";
import LangContext from "../../../context/LangContext";
import Select from "../../Fields/Select";
import Range from "../../Fields/Range";
import TextField from "../../Fields/TextField";
import { isNumber, limitLengthRequired } from "../../../utils/validations";

const SelfConsumptionTab = () => {
  const [showModal, setShowModal] = useState(false);
  const { lang } = useContext(LangContext);

  // primer fetch
  const [formValues, setFormValues] = useState({
    dynamicControl: false,
    logic_control_0: "min",
    max_power2export: 123,
    time2reconect: 1,
    time_dead: 900,
  });

  // segundo fetch (analizadores)
  const [analyzers, setAnalyzers] = useState([
    { serial: 21001, name: "1", description: "analizadores_red" },
    { serial: 21002, name: "2", description: "analizadores_red" },
  ]);

  // Estado para controlar si hay analizadores disponibles
  const hasAvailableAnalyzers = analyzers.length > 0;

  const [showExportPower, setShowExportPower] = useState(
    formValues?.max_power2export > 0
  );

  const logicOptions = [
    { value: "min", label: "Minimum" },
    { value: "avg", label: "Average" },
  ];

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMaxPowerChange = (value) => {
    handleChange("max_power2export", value ? 123 : 0);
    setShowExportPower(value);
  };

  const handleSave = () => {
    setShowModal(true);
  };

  const confirmSave = () => {
    console.log("Valores del formulario:", formValues);
    setShowModal(false);
  };

  return (
    <div id="selfConsumption">
      <div className="ec-form-content">
        <Checkbox
          label={"zero_injection"}
          initialValue={formValues.dynamicControl}
          disabled={!hasAvailableAnalyzers}
          singleField
          onChange={(value) => handleChange("dynamicControl", value)}
        />

        <div>
          {/* Solo mostramos los analizadores si zero injection está activo */}
          {formValues.dynamicControl && hasAvailableAnalyzers && (
            <div>
              {analyzers.map((analyzer) => (
                <Checkbox
                  key={analyzer.serial}
                  label={`${analyzer.name}`}
                  initialValue={false}
                  onChange={(value) =>
                    handleChange(`network_analyzer_${analyzer.name}`, value)
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AdvanceSetup>
        <div className="ec-form-content">
          <Select
            label={lang.logic_control_0}
            initialValue={formValues.logic_control_0}
            options={logicOptions}
            onChange={(value) => handleChange("logic_control_0", value)}
          />

          <Checkbox
            label={lang.max_power2export}
            initialValue={formValues.max_power2export > 0}
            onChange={(value) => handleMaxPowerChange(value)}
          />

          {showExportPower && (
            <TextField
              label={"export_power"}
              initialValue={formValues.export_power}
              onChange={(value) => handleChange("export_power", value)}
              validations={[isNumber()]}
            />
          )}

          <Range
            label={lang.time_dead}
            description={lang.time_dead_description}
            initialValue={formValues.time_dead}
            onChange={(value) => handleChange("time_dead", value)}
            min={1}
            max={900}
            unit={lang.seconds}
          />

          <Range
            label={lang.time2reconect}
            initialValue={formValues.time2reconect}
            description={lang.time2reconect_description}
            onChange={(value) => handleChange("time2reconect", value)}
            min={1}
            max={900}
            unit={lang.seconds}
          />
        </div>
      </AdvanceSetup>

      <div className="ec-btn-container">
        <button className="ec-primary-btn" onClick={handleSave}>
          {lang.save}
        </button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{lang.confirm_changes}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{lang.confirm_changes_description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="ec-secondary-btn"
            style={{ flex: 1 }}
            onClick={() => setShowModal(false)}
          >
            {lang.cancel}
          </button>
          <button
            className="ec-primary-btn"
            style={{ flex: 1 }}
            onClick={confirmSave}
          >
            {lang.confirm}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelfConsumptionTab;



//falta

// Los analizadores los tengo que mandar asi:
// numserie_meter_net
// "21001,21002"
//que formValues sea un objeto modificado del fetch de config al que se le añadan los analizadores (en caso de que existan)
