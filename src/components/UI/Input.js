import React, { useRef } from "react";
import "./Input.css";

const Input = (props) => {
  // Destructuring props which is an  object.(An object is destructured with the key name)
  //  // The ...others is the rest operator: Out of the all the key value pair in props, I took out label and id, then I convert the remaining key-value pair to a new object stored in the variable "others"
  const { label, id, ...others } = props;

  // Initializing useRef
  const nameRef = useRef();

  // The function that is called whenever the input field is unfocused.
  const blurHandler = () => {
    // Getting the input field value by the help of the initialized useRef. Your data is always on the "current" object
    const data = nameRef.current.value
    console.log(data)
  };

  return (
    <>
      <div className="form_group">
        <label className="form_label" htmlFor={id}>
          {label}
        </label>
        <input
          ref={nameRef} // mapping the ref instance to this input
          className="form_input"
          {...others} // Spread operator: I spread the new Object I created with Rest Operator earlier
          onBlur={blurHandler}
        />
      </div>
    </>
  );

};
export default Input;


/////////////////////////////////////////////
//////Everything below is on how to use useRef on a custom Input

// const Input = React.forwardRef((props, ref) => {

//   return (
//     <>
//       <div className="form_group">
//         <label className="form_label" htmlFor={props.id}>
//           {props.label}
//         </label>
//         <input
//           ref={ref} // mapping the forwarded ref instance to this input
//           className="form_input"
//           {...props} // Spread operator: I spread the props object
//           onBlur={blurHandler}
//         />
//       </div>
//     </>
//   );

// });
// export default Input;

// /////////////////////////////////////////////
// //////Everything below is on how to use useReducer
// // What differs btw useState and useReducer is that you will be the one to write the function to update your state.

// // This is the function to update my state.
// const nameReducer = (state, action) => {
//   // Only this will be executed if the action dispatched type === 'BLUR'
//   if (action.type === "BLUR") {
//     console.log('BLUR');
//     return {name: action.value}
//   }

//   // Only this will be executed if the action dispatched type === 'CHANGE'
//   if (action.type === 'CHANGE') {
//     console.log('CHANGE')
//     return {name: action.data}
//   }

//   // This is more like the default case in your switch statement. It will be executed when the action.type doesn not match any of the above.
//   return state;
// };


// const Input = (props) => {

//   // Just like the initial state you use to passe to useState
//   const initialState = {}

//   // You get your value from "nameState"
//   // You dispatch action with "dispatchFn"
//   // The nameReducer functioin was declared outside the component since there is no need to re-evaluate it whenever the component is re-evaluated.
//   const [nameState, dispatchFn] = useReducer(nameReducer, initialState);

//   const blurHandler = (e) => {
//       // The  dispatch function will call the nameReducer function.
//     dispatchFn({ type: "BLUR", value: e.target.value });
//   };

//   const changeHandler = (e) => {
//     // The  dispatch function will call the nameReducer function.
//     dispatchFn({type: 'CHANGE', data: e.target.value})
//   }

//   useEffect(() => {
//     console.log(nameState);
//   }, [nameState]);

//   return (
//     <div className="input__group">
//       <label>{props.label}</label>
//       <input {...props} onBlur={blurHandler} onChange={changeHandler}></input>
//     </div>
//   );
// };
// export default Input;
