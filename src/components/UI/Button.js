import React from "react";
import "./Button.css";

const Button = (props) => {
  console.log('Button is Executed');
  return (
    <button className="button" type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
