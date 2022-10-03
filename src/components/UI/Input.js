import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import "./Input.css";

const Input = (props) => {
  // console.log(props)
  const { label, id, ...others } = props;

  const ctx =  useContext(AppContext);
  console.log(ctx)
  
  // const sendDataToParent = (e) => {
  //   props.getData(e.target.value);
  // }
  return (
    <>
      <div className="form_group">
        <label className="form_label" htmlFor={id}>
          {label}
        </label>
        <input
          className="form_input"
          {...others} // Spread operator: I spread the new Object I created with Rest Operator earlier
          // onChange={sendDataToParent}
        />
      </div>
    </>
  );
};
export default Input;
