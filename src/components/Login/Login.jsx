import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useLang } from "../../context/LangContext";
import { BsPerson, BsLock } from "react-icons/bs";
import LanguageSelector from "../LanguageSelector";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { lang } = useLang();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === "admin" && credentials.password === "admin") {
      //cambiar por respuesta del fetch al backend
      localStorage.setItem("user", JSON.stringify(credentials));
      navigate("/combox");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
    <div className="ec-login-header">
        <img src="../../../public/logo-enerclic.png" alt="logo" className="login-logo" />
        <LanguageSelector />
    </div>

    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {/* <img src="../../../public/logo-enerclic.png" alt="logo" className="login-logo" /> */}
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <span className="icon-wrapper">
            <BsPerson size={35} />
          </span>
          <input
            type="text"
            name="username"
            placeholder={lang.username}
            value={credentials.username}
            onChange={handleChange}
            className="ec-field"
          />
        </div>
        <div className="form-group">
          <span className="icon-wrapper">
            <BsLock size={35} />
          </span>
          <input
            type="password"
            name="password"
            placeholder={lang.password}
            value={credentials.password}
            onChange={handleChange}
            className="ec-field"
          />
        </div>

        <button
          type="submit"
          className="ec-primary-btn"
          style={{ width: "100%" }}
        >
          {lang.login}
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;

//añadir header con el logo y el select de idioma
