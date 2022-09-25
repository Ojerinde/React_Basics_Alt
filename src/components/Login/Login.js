// import { useEffect, useState } from "react";
// import Button from "../UI/Button";
// import Card from "../UI/Card";
// import Input from "../UI/Input";

// import "./Login.css";
// const Login = (props) => {
//   const [name, setName] = useState("");

//   const nameChangeHandler = (e) => {
//     setName(e.target.value);
//   };

//   useEffect(() => {
//     // This is executed the first time useEffect is executed
//     const time = setTimeout(() => {
//       // Remember this will be executed after 10s
//       console.log("I was Executed");
//     }, 10000);

//     // The return function is not executed the first time the useEffect is executed
//     return () => {
//       console.log("Time is Starting again!");
//       // Clearing the time once the user type something.
//       clearTimeout(time);
//     };
//   }, [name]); // WHenever the name change, this useEffect is executed

//   const submitHandler = (e) => {
//     e.preventDefault();

//     // Passing the data to the parent. onConfirm is a function declared in the parent and it is expecting a data whenever it is executed.
//     props.onConfirm(name);
//   };

//   return (
//     <Card className="login__box">
//       <form onSubmit={submitHandler} className="login__form">
//         <Input
//           label="Name"
//           id="name"
//           type="text"
//           placeholder="Enter your name"
//           name="name"
//           onChange={nameChangeHandler}
//         />
//         <Button type="submit">Submit!</Button>
//       </form>
//     </Card>
//   );
// };
// export default Login;

// /////////////////////////////////////////////
// //////Everything below is on how to use useRef on a custom Input

// import Button from "../UI/Button";
// import Card from "../UI/Card";
// import Input from "../UI/Input";

// import "./Login.css";
// const Login = (props) => {
//   const nameRef = useRef();

//   const submitHandler = (e) => {
//     e.preventDefault();

//     // Getting the value when the form is submitted
//     const data = nameRef.current.value;
//     console.log(data)
//   };

//   return (
//     <Card className="box">
//       <form onSubmit={submitHandler}>
//         <Input
//           label="Name"
//           id="name"
//           type="text"
//           placeholder="Enter your name"
//           name="name"
//           onChange={nameChangeHandler}
//           ref={nameRef} // Forwarding the ref
//         />
//         <Button type="submit">Submit!</Button>
//       </form>
//     </Card>
//   );
// };
// export default Login;

import { useContext, useState } from "react";
import AppContext from "../../store/AppContext";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";

import "./Login.css";
const Login = (props) => {
  const [name, setName] = useState("");

  const ctx = useContext(AppContext);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // ctx.createItem(name);
    ctx.deleteItem(name)

    console.log(ctx.items);
  };

  return (
    <Card className="login__box">
      <form onSubmit={submitHandler} className="login__form">
        <Input
          label="Name"
          id="name"
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={nameChangeHandler}
        />
        <Button type="submit">Submit!</Button>
      </form>
    </Card>
  );
};
export default Login;
