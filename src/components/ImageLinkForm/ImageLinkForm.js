import React from "react";
import "./ImageLinkForm.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="mt6">
      <span className="white head">
        {"Enter the image link below to detect the face"}
      </span>
      <div className="center">
        <div className="form center pa4 br3">
          <input className="font" type="text" onChange={onInputChange} />
          <button className="button" onClick={onButtonSubmit}>
            <span className="detect">Detect</span>
          </button>
          <CopyToClipboard text="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201612/mcindia-fb-kirtibhoutika-story_647_122616125612.jpg">
            <button
              id="isCopied"
              className="copy"
              onClick={() =>
                (document.getElementById("isCopied").innerHTML =
                  "<b>Copied</b>")
              }
            >
              <span className="detect">Copy an URL</span>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
