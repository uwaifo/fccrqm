import React from "react";
// This is a presentational component
const Button = ({ btnLabel, clickHandler }) => (
  <button onClick={clickHandler}>{btnLabel}</button>
);

export default Button;
