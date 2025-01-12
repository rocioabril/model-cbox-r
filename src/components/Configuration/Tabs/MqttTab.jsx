import { Modal } from "react-bootstrap";
import AdvanceSetup from "./AdvanceSetup";
import { useContext, useState } from "react";
import Checkbox from "../../Fields/Checkbox";
import LangContext from "../../../context/LangContext";
import Select from "../../Fields/Select";
import Range from "../../Fields/Range";
import TextField from "../../Fields/TextField";
import PasswordField from "../../Fields/PasswordField";
import { isHostValid, isPortValid, limitLengthOptional } from "../../../utils/validations";
import ErrorToast from "../../ErrorToast";
import FileField from "../../Fields/FileField";

const MqttTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const { lang } = useContext(LangContext);
 
  const [formValues, setFormValues] = useState({
    mqtt2_active: true,
    mqtt2_aws: true,
    mqtt2_tls: false,
    mqtt2_user: "user",
    mqtt2_password: "password",
    mqtt2_host: "mqtt.eclipse.org",
    mqtt2_port: 1883,
    mqtt2_qos: 0,
    mqtt2_ack: 1,
    mqtt2_bucletime: 345.9,
    mqtt2_select_limit: 100,
  });

  const qosOptions = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
  ];

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return (
      limitLengthOptional(3, 30)(formValues.mqtt2_user) &&
      limitLengthOptional(4, 12)(formValues.mqtt2_password) &&
      isHostValid()(formValues.mqtt2_host) &&
      isPortValid()(formValues.mqtt2_port)
    );
  };

  const handleSave = () => {
    if (validateForm()) {
      setShowModal(true);
    } else {
      setShowErrorToast(true);
    }
  };

  const confirmSave = () => {
    // Aquí puedes enviar formValues a tu backend
    console.log("Valores del formulario:", formValues);
    setShowModal(false);
  };

  return (
    <div>
      <div className="ec-form-content">
        <Checkbox
          label={"mqtt2_active"}
          initialValue={formValues.mqtt2_active}
          onChange={(value) => handleChange("mqtt2_active", value)}
        />
        <Checkbox
          label={"mqtt2_aws"}
          initialValue={formValues.mqtt2_aws}
          onChange={(value) => handleChange("mqtt2_aws", value)}
        />
        <Checkbox
          label={"mqtt2_tls"} 
          initialValue={formValues.mqtt2_tls}
          onChange={(value) => handleChange("mqtt2_tls", value)}
        />
        
        <TextField
          label={"port"}
          initialValue={formValues.mqtt2_port}
          onChange={(value) => handleChange("mqtt2_port", value)}
          validations={[isPortValid()]}
        />

        <TextField
          label={"host"}
          initialValue={formValues.mqtt2_host}
          onChange={(value) => handleChange("mqtt2_host", value)}
          validations={[isHostValid()]}
        />

        <TextField
          label={"user"}
          initialValue={formValues.mqtt2_user}
          onChange={(value) => handleChange("mqtt2_user", value)}
          validations={[limitLengthOptional(3, 30)]}
        />
        <PasswordField
          label={"password"}
          initialValue={formValues.mqtt2_password}
          onChange={(value) => handleChange("mqtt2_password", value)}
          validations={[limitLengthOptional(4, 12)]}
        />

        <FileField
          label={"ca"}
          onChange={(value) => handleChange("mqtt2_file", value)}
          allowedExtensions={[".pem", ".crt"]}
          name={"mqtt2_file"}
        />

        <FileField
          label={"private_key"}
          onChange={(value) => handleChange("mqtt2_file", value)}
          allowedExtensions={[".pem", ".crt"]}
          name={"mqtt2_file"}
        />

        <FileField
          label={"certificate"}
          onChange={(value) => handleChange("mqtt2_file", value)}
          allowedExtensions={[".pem", ".crt"]}
          name={"mqtt2_file"}
        />

        <Select
          label={"qos"}
          initialValue={formValues.mqtt2_qos}
          options={qosOptions}
          onChange={(value) => handleChange("mqtt2_qos", value)}
          singleField
          fieldSize="small"
        />
      </div>

      <AdvanceSetup>
        <div className="ec-form-content">
          <Checkbox
            label={"mqtt2_ack"}
            initialValue={formValues.mqtt2_ack}
            onChange={(value) => handleChange("mqtt2_ack", value)}
          />

          <Range
            label={"mqtt2_bucletime"}
            initialValue={formValues.mqtt2_bucletime}
            onChange={(value) => handleChange("mqtt2_bucletime", value)}
            step={0.1}
            min={0.3}
            max={900}
            unit={"seconds"}
          />

          <Range
            label={"select_limit"}
            description={"select_limit_description"}
            initialValue={formValues.mqtt2_select_limit}
            onChange={(value) => handleChange("mqtt2_select_limit", value)}
            min={100}
            max={500}
            unit={""}
            singleField
          />
        </div>
      </AdvanceSetup>

      <div className="ec-btn-container">
        <button className="ec-primary-btn" onClick={handleSave}>
          {"save"}
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

export default MqttTab;
