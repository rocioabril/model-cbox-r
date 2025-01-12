// export default GeneralInfo;
import { useState } from "react";
import DevicesTable from "./DevicesTable/DevicesTable.jsx"; // Vamos a extraer la tabla de dispositivos
import BusesTable from "./BusesTable/BusesTable.jsx"; // La tabla de buses que vas a crear
import "./generalInfo.css";

function GeneralInfo() {
  // Estado para manejar qué tab está activa
  const [activeTab, setActiveTab] = useState("devices");

  return (
    <div className="main-container main-general-info-container">
      <div className="general-info-container" id="GeneralInfo">
        {/* Tabs de navegación */}
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === "devices" ? "active" : ""}`}
            onClick={() => setActiveTab("devices")}
          >
            
            Devices
          </button>
          <button
            className={`tab-button ${activeTab === "buses" ? "active" : ""}`}
            onClick={() => setActiveTab("buses")}
          >
            
            Buses
          </button>
        </div>

        {/* Contenido basado en la tab activa */}
        <div className="content-container">
          {activeTab === "devices" && <DevicesTable />}
          {activeTab === "buses" && <BusesTable />}
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
