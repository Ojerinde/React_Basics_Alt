
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
          value={name}
        />
        <Button type="submit">Submit!</Button>
      </form>
    </Card>
  );
};
export default Login;
