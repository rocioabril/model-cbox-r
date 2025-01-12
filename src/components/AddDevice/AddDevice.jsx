import { useState } from "react";
import { useLang } from "../../context/LangContext";
import "./addDevice.css";
import { BsPlus } from "react-icons/bs";
import Select from "../Fields/Select";
import TextField from "../Fields/TextField";

function AddDevice() {
  const { lang } = useLang();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const protocols = [
    { id: 1, idProto: 4, name: 'modbusrtu' },
    { id: 2, idProto: 17, name: 'modbustcp' }
  ];

  const deviceTypes = [   
    { id: 1, name: 'Counter' },
    { id: 2, name: 'Inversor' },
    { id: 3, name: 'Serial Meter' },
    { id: 4, name: 'Est Meteo' },
    { id: 5, name: 'Medidor AD' },
    { id: 6, name: 'analizadores_red' },
    { id: 7, name: 'seguidor' },
    { id: 8, name: 'forecast' },
    { id: 9, name: 'Variador' },
    { id: 10, name: 'Baterias' },
    { id: 11, name: 'Grupo Respaldo' },
    { id: 12, name: 'Power Supply' }
];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <div>
          <Select label="Device Type" options={deviceTypes} />
          <TextField label="Device Name" />
        </div>;
      case 2:
        return <div>Step 2: Protocol
          <Select label="Protocol" options={protocols} />
        </div>;
      case 3:
        return <div>
          <TextField label={lang.address || "Address"} />
        </div>;
      case 4:
        return <div>Step 4: Bus Selection</div>;
      case 5:
        return <div>Step 5: Brand & Model</div>;
      case 6:
        return <div>Step 6: Summary</div>;
      default:
        return null;
    }
  };

  return (
    <div className="main-container">
      <div id="AddDevice" className="ec-form">
        
        <h1 className="form__title">
          <span className="title__icon-bg"><BsPlus /></span>
          {lang.add_device_title || "Add Device"}
        </h1>

        { renderStepContent() }

        <div className="button-container">
          <button 
            className="ec-secondary-btn" 
            onClick={handlePrev}
            style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
          >
            {lang.prev_button || "Previous"}
          </button>
          {currentStep < totalSteps ? (
            <button className="ec-primary-btn" onClick={handleNext}>
              {lang.next_button || "Next"}
            </button>
          ) : (
            <button className="ec-primary-btn">
              {lang.add_button || "Add"}
            </button>
          )}
        </div>

        <div className="steps-indicator">
          {[...Array(totalSteps)].map((_, index) => (
            <span
              key={index}
              className={`step ${
                index + 1 === currentStep
                  ? "active"
                  : index + 1 === currentStep - 1
                  ? "completed"
                  : index + 1 === currentStep + 1
                  ? "next"
                  : ""
              }`}
            />
          ))}
        </div>            
      </div>
    </div>
  );
}

export default AddDevice;