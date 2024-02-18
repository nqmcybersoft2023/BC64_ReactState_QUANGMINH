// FaceImage.js
import React from "react";
import faceImage from "./model.jpg";
function FaceImage({ selectedGlasses }) {
  return (
    <div className="face-container">
      <img src={faceImage} alt="Face" className="face-image" />
      {selectedGlasses && (
        <img src={selectedGlasses} alt="Glasses" className="glasses-image" />
      )}
    </div>
  );
}

export default FaceImage;
