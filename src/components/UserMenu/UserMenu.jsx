import { BsPersonCircle, BsBoxArrowRight,BsPencilSquare } from "react-icons/bs";  
import { Dropdown } from "react-bootstrap";
import "./userMenu.css";
import { useLang } from "../../context/LangContext";

// ... existing imports ...
import { useState } from "react";
import AccountModal from "./AccountModal";

const UserMenu = () => {  
  const user = "Enerclic";
  const { lang } = useLang();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as="button" className="user-menu-container">
          <BsPersonCircle size={20} />
          <p>{user}</p>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item 
            onClick={() => setShowModal(true)} 
            className="icon-text"
          >
            <BsPencilSquare size={16} />
            {lang.account}
          </Dropdown.Item>
          <Dropdown.Item href="#/logout" className="icon-text" style={{color: "blue"}}>
            <BsBoxArrowRight size={18} />
            {lang.logout}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <AccountModal 
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  )
}

export default UserMenu;
