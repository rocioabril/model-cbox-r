import { useContext, useRef, useState } from "react";
import LangContext from "../../context/LangContext";
import { BsUpload, BsX, BsXLg } from "react-icons/bs";
import { FaFile, FaTrash, FaUpload } from "react-icons/fa";
import "../../components/Fields/fields.css";
import ErrorToast from "../ErrorToast";

function FileField({
  label,
  onChange,
  allowedExtensions = [],
  name,
  singleField,
}) {
  const { lang } = useContext(LangContext);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);  


  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };

  const isValidExtension = (filename) => {
    if (allowedExtensions.length === 0) return true;
    return allowedExtensions.some(ext => filename.toLowerCase().endsWith(ext));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file && isValidExtension(file.name)) {
      setFileName(file.name);
      setShowDeleteBtn(true);
      onChange?.(file);
    } else {
      // Clear the input
      e.target.value = null;
      setFileName("");
      setShowDeleteBtn(false);
      setShowErrorToast(true);
      // You could show an error toast here
    }
  };

  const handleDelete = () => {
    fileInputRef.current.value = null;
    setFileName("");
    setShowDeleteBtn(false);
    onChange?.(null);
  };

  return (
    <>
    <div className={`field-container ${singleField ? "single_field-container" : ""}`}>
      <div className="label_field-container">
        <label className="ec-label">{lang[label]}</label>
        <div className="ec-input-container" style={{flexDirection: "row-reverse"}}>
          {/* Hidden real file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            name={name}
            accept={allowedExtensions.join(',')}
          />
          
          {/* Custom file input button */}
          <button
            type="button"
            onClick={handleCustomButtonClick}
            className="ec-file-button"
          >
        
            <BsUpload size={16}/>
            <span>{lang["upload_file"]}</span>
          </button>


          {/* Delete button */}
          {showDeleteBtn && (
            <button
              type="button"
              onClick={handleDelete}
              className="ec-file-delete"
            >
              <BsX size={20} />
            </button>
          )}

          {/* File name display */}
          {fileName && (
            <div className="ec-file-name">
              <FaFile />
              <span>{fileName}</span>
            </div>
          )}


        </div>
      </div>
    </div>

    <ErrorToast
      message={lang.error_feedback.certificate_extension}
      show={showErrorToast}
      onClose={() => setShowErrorToast(false)}
    />
    </>
  );
}

export default FileField;