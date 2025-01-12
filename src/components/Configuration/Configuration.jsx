import { BsGear } from "react-icons/bs";
import { BsCaretRightFill, BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import "./configuration.css";

import GeneralTab from "./Tabs/GeneralTab.jsx";
import MqttTab from "./Tabs/MqttTab.jsx";
import SelfConsumptionTab from "./Tabs/SelfConsumptionTab.jsx";
import MaintenanceTab from "./Tabs/MaintenanceTab.jsx";
import { useLang } from "../../context/LangContext.jsx";

const tabs = [
  { id: 'general', label: 'general' },
  { id: 'mqtt', label: 'mqtt' },
  { id: 'selfconsumption', label: 'selfconsumption' },
  { id: 'maintenance', label: 'maintenance' },
];

const Configuration = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [showTabs, setShowTabs] = useState(true);
  const { lang } = useLang();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowTabs(false);
  };

  const handleBackClick = () => {
    setActiveTab(null);
    setShowTabs(true);
  };

  const renderActiveTab = () => {
    const tabComponents = {
      general: GeneralTab,
      mqtt: MqttTab,
      selfconsumption: SelfConsumptionTab,
      maintenance: MaintenanceTab,
    };
    
    const TabComponent = tabComponents[activeTab];
    return TabComponent ? <TabComponent /> : null;
  };

  return (
    <div className="main-container">
      <div id="Configuration" className="ec-form">
        <h1 className="form__title">
          <span className="title__icon-bg">
            <BsGear />
          </span>
          {lang.configuration}
        </h1>
        {showTabs ? (
          <ul className="ec-configuration-tabs">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button onClick={() => handleTabClick(tab.id)}>
                  <p>{lang[tab.label]}</p>
                  <BsCaretRightFill size={12} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <button onClick={handleBackClick} className="back-button">
              <BsArrowLeft /> {lang[activeTab]}
            </button>
            {renderActiveTab()}
          </>
        )}
      </div>
    </div>
  );
};

export default Configuration;