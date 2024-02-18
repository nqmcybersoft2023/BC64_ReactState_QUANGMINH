// GlassesList.js
import React from "react";
import GlassesItem from "./GlassesItem";

function GlassesList({ onGlassesClick }) {
  // Dữ liệu JSON của các mẫu kính
  const glassesData = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: require("./glassesImage/v1.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: require("./glassesImage/v2.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: require("./glassesImage/v3.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: require("./glassesImage/v4.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: require("./glassesImage/v5.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: require("./glassesImage/v6.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: require("./glassesImage/v7.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: require("./glassesImage/v8.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: require("./glassesImage/v9.png"),
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
  ];

  return (
    <div className="glasses-container">
      {glassesData.map((glasses) => (
        <GlassesItem
          key={glasses.id}
          imageUrl={glasses.url}
          onClick={() => onGlassesClick(glasses.url)}
        />
      ))}
    </div>
  );
}

export default GlassesList;
