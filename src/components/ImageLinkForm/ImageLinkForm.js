import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="mt6">
      <span className="white head">
        {"Enter the image link below to detect the face"}
      </span>
      <div className="center">
        <div className="form center pa4 br3">
          <input className="font" type="text" onChange={onInputChange} />
          <button onClick={onButtonSubmit}>
            <span className="detect">Detect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
