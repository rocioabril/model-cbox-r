import { useState } from 'react';
import { BsCaretRightFill, BsTools } from "react-icons/bs";
import "./advanceSetup.css";
import { useLang } from '../../../context/LangContext';

function AdvanceSetup({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const { lang } = useLang();

  return (
    <div className="ec-advance-setup">
      <button 
        className="ec-advance-setup-container"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsTools />
        <p>{lang.advance_setup}</p>
        <BsCaretRightFill 
          size={12} 
          className={isOpen ? 'rotate-90' : ''} 
        />
      </button>
      {isOpen && (
        <div className="ec-advance-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default AdvanceSetup;