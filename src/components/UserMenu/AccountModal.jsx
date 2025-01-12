import "./accountModal.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useLang } from "../../context/LangContext";
import TextField from "../Fields/TextField";
import { BsExclamationCircle, BsPencilSquare, BsX } from "react-icons/bs";
import PasswordField from "../Fields/PasswordField";

const AccountModal = ({ show, onHide }) => {
  const { lang } = useLang();
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [newPassword, setNewPassword] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Aquí iría la lógica para actualizar el usuario
  //     console.log({ username, password, newPassword });
  //     onHide();
  //   };

  const [showPasswordFields, setShowPasswordFields] = useState(false);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="icon-text">
          <BsPencilSquare size={18} />
          <p style={{ fontSize: "1.2rem" }}>{lang.account}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "0" }}>
        <TextField label={"username"} />

        {!showPasswordFields ? (
          // Fake password field
          <div className="field-container">
            <div className="label_field-container">
              <label className="ec-label">{lang.password}</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  minWidth: "200px",
                  gap: "0.5rem",
                }}
              >
                <input
                  type="text"
                  value="********"
                  className="ec-field"
                  style={{ minWidth: "unset" }}
                  disabled
                />
                <button onClick={() => setShowPasswordFields(true)}>
                  <BsPencilSquare size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Real password fields with X button

          <div className="password-fields-container">
            <button 
              onClick={() => setShowPasswordFields(false)}
              style={{alignSelf: "flex-end", padding: "0 1.5rem"}}
            >
              <BsX size={25} />
            </button>

            <div className="password-warning-container">
              <p><BsExclamationCircle size={23} style={{paddingRight: "0.3rem"}}/>{lang.password_warning}</p>
            </div>

            <PasswordField label={"password"} />
            <PasswordField label={"newPassword"} />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="ec-secondary-btn" style={{ flex: 1 }}>
          {lang.cancel}
        </button>
        <button className="ec-primary-btn" style={{ flex: 1 }}>
          {lang.save}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
