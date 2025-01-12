import AdvanceSetup from "./AdvanceSetup.jsx";

const MaintenanceTab = () => {
  return (
    <div id="maintenance">
      <p style={{ padding: "1rem 1.5rem" }}>Maintenance Settings</p>
      <div className="ec-form-content">
        {/* Add your maintenance tab content here */}
      </div>
      <AdvanceSetup>
        <div style={{ padding: "1rem 1.5rem" }}>
          <p>Configuración Avanzada - Maintenance</p>
        </div>
      </AdvanceSetup>
    </div>
  );
};

export default MaintenanceTab;