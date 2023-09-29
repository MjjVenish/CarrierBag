import React from "react";

const DataButton = ({ label, handleClick, value }) => {
  return <button onClick={() => handleClick(value)}>{label}</button>;
};

export default DataButton;
