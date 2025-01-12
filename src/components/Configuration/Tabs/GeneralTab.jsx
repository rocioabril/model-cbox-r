import { Modal } from "react-bootstrap";
import AdvanceSetup from "./AdvanceSetup";
import { useContext, useState } from "react";
import Checkbox from "../../Fields/Checkbox";
import LangContext from "../../../context/LangContext";
import Select from "../../Fields/Select";
import Range from "../../Fields/Range";
import TextField from "../../Fields/TextField";
import { isCoordinateValid, limitLengthOptional } from "../../../utils/validations";
import ErrorToast from "../../ErrorToast";

const GeneralTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const { lang } = useContext(LangContext);

  const [formValues, setFormValues] = useState({
    autolink: true,
    bucletime: 345.9,
    coordinates: "41.18553580656112, -22.29137152633974",
    general_timeout: 2.3,
    installation_name: "Azzurro",
    nregister: 98,
    save_to_storage: false,
    time_zone: "America/New_York",
  });

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return (
      limitLengthOptional(0, 50)(formValues.installation_name) &&
      isCoordinateValid()(formValues.coordinates)
    );
  };

  const handleSave = () => {
    if (validateForm()) {
      setShowModal(true);
    } else {
      setShowErrorToast()
    }
  };

  const confirmSave = () => {
    console.log("Valores del formulario:", formValues);
    setShowModal(false);
  };

  const timeZones = [
    { value: "Africa/Asmera", label: "Africa/Asmera" },
    { value: "America/New_York", label: "America/New_York" },
  ];

  return (
    <div>
      <div className="ec-form-content">
        <Select
          label={lang.time_zone}
          initialValue={formValues.time_zone}
          options={timeZones}
          onChange={(value) => handleChange("time_zone", value)}
        />

        <TextField
          label={"installation_name"}
          initialValue={formValues.installation_name}
          onChange={(value) => handleChange("installation_name", value)}
          validations={[limitLengthOptional(0, 50)]}
        />

        <TextField
          label={"coordinates"}
          initialValue={formValues.coordinates}
          onChange={(value) => handleChange("coordinates", value)}
          validations={[isCoordinateValid()]}
          singleField
        />
      </div>
      <AdvanceSetup>
        <div className="ec-form-content">
          <Checkbox
            label={"autolink"}
            description={"autolink_description"}
            initialValue={formValues.autolink}
            onChange={(value) => handleChange("autolink", value)}
          />

          <Checkbox
            label={"save_to_storage"}
            description={"save_to_storage_description"}
            initialValue={formValues.save_to_storage}
            onChange={(value) => handleChange("save_to_storage", value)}
          />

          <Range
            label={"bucletime"}
            description={"bucletime_description"}
            initialValue={formValues.bucletime}
            onChange={(value) => handleChange("bucletime", value)}
            step={0.1}
            min={0.3}
            max={900}
            unit={"seconds"}
          />
          <Range
            label={"general_timeout"}
            description={"general_timeout_description"}
            initialValue={formValues.general_timeout}
            step={0.1}
            min={0.5}
            max={10}
            unit={"seconds"}
            onChange={(value) => handleChange("general_timeout", value)}
          />
          <Range
            label={"nregister"}
            description={"nregister_description"}
            initialValue={formValues.nregister}
            step={1}
            min={0}
            max={120}
            unit={"registers"}
            singleField
            onChange={(value) => handleChange("nregister", value)}
          />
        </div>
      </AdvanceSetup>

      <div className="ec-btn-container">
        <button className="ec-primary-btn" onClick={handleSave}>
          {lang.save}
        </button>
      </div>

      <ErrorToast
        message={lang.error_feedback.form}
        show={showErrorToast}
        onClose={() => setShowErrorToast(false)}
      />

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

export default GeneralTab;
