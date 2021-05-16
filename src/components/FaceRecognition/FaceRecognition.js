import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  var id = 1;
  return (
    <div className="center ma">
      <div className="absolute mt3">
        <img className="imagebox" id="inputimage" alt="" src={imageUrl} />
        {box.map((box) => {
          return (
            <div
              key={id++}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
