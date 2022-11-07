import React from "react";
import "./button.css";

const button = ({ imp, text, link }) => {
  return (
    <div className={`button ${imp === "secondary" ? "button__white" : ""}`}>
      <a href={link}>{text}</a>
    </div>
  );
};

export default button;
