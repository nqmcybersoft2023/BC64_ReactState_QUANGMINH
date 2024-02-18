// App.js
import React, { useState } from "react";
import FaceImage from "./FaceImage";
import GlassesList from "./GlassesList";
import "./appp.css";

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleGlassesClick = (glassesUrl) => {
    setSelectedGlasses(glassesUrl);
  };

  return (
    <div className="app appp  d-flex align-items-center">
      
      <FaceImage selectedGlasses={selectedGlasses} />
      <GlassesList onGlassesClick={handleGlassesClick} />
    </div>
  );
}

export default App;
