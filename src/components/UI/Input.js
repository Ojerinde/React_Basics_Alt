import React from "react";
import "./Input.css";

const Input = (props) => {
  const { label, id, ...others } = props;
  

  return (
    <>
      <div className="form_group">
        <label className="form_label" htmlFor={id}>
          {label}
        </label>
        <input
          className="form_input"
          {...others} // Spread operator: I spread the new Object I created with Rest Operator earlier
        />
      </div>
    </>
  );
};
export default Input;
