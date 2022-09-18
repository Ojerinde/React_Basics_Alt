import { useState } from "react";
import Button from "./Button";

const HomePage = (props) => {
 
  const [number, setNumber] = useState(0);
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setNumber(function (previousState) {
      return "Joel";
    });
  };

  const trueHandler = () => {
    setClicked(true);
  };
  const falseHandler = () => {
    setClicked(false);
  };

  return (
    <>
      <div>{number}</div>
      <Button type="button" onClick={clickHandler}>
        Click me
      </Button>
      <Button type="button" onClick={trueHandler}>
        set to true
      </Button>
      <Button type="button" onClick={falseHandler}>
        set to false
      </Button>
    </>
  );
};
export default HomePage;
