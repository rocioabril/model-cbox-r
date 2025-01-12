import "./sidebar.css";

import { Link, useLocation } from "react-router-dom";
import { BsInfoCircle, BsGear, BsGlobe } from "react-icons/bs";
import LanguageSelector from "../LanguageSelector";
import { useLang } from "../../context/LangContext";

function Sidebar() {
  const location = useLocation();
  const { lang } = useLang();

  const version = "1.0.0"; //fetch from backend

  const handleNavClick = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="ec-sidebar">
      <div>
        <div className="logo-lang-container">
          <img
            src="../../../public/logo-enerclic.png"
            className="ec-sidebar__logo"
          ></img>
          <LanguageSelector />
        </div>

        <div className="ec-sidebar__tab-container">
          <li>
            <Link
              to="/"
              className={`ec-sidebar__tab ${
                location.pathname === "/" ? "ec-sidebar__tab-active" : ""
              }`}
              onClick={() => handleNavClick("GeneralInfo")}
            >
              <BsInfoCircle />
              <p>{lang.general_info}</p>
            </Link>
          </li>
          <li>
            <Link
              to="/configuration"
              className={`ec-sidebar__tab ${
                location.pathname === "/configuration"
                  ? "ec-sidebar__tab-active"
                  : ""
              }`}
              onClick={() => handleNavClick("Configuration")}
            >
              <BsGear size={30} />
              <p>{lang.configuration}</p>
            </Link>
          </li>
          <li>
            <Link
              to="/network"
              className={`ec-sidebar__tab ${
                location.pathname === "/network" ? "ec-sidebar__tab-active" : ""
              }`}
              onClick={() => handleNavClick("Network")}
            > 
              <BsGlobe />
              <p>{lang.network}</p>
            </Link>
          </li>
          <li className="add-device-btn-container">
            <Link to="/add-device" onClick={() => handleNavClick("AddDevice")}>
              <button className="ec-primary-btn add-device-btn">
                Add Device
              </button>
            </Link>
          </li>
        </div>
      </div>
      <div>{version}</div>
    </nav>
  );
}

export default Sidebar;
