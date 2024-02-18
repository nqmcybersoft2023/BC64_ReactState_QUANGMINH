// GlassesItem.js
import React from "react";
import "./App.css";

function GlassesItem({ imageUrl, onClick }) {
  return (
    <div className="glasses-item" onClick={() => onClick(imageUrl)}>
      <img src={imageUrl} alt="Glasses" />
    </div>
  );
}

export default GlassesItem;
