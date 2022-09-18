import { useContext } from "react";
import DataContext from "./store/data-context";

const Button = (props) => {
   const ctx = useContext(DataContext)
   console.log(ctx)
  return <button onClick={props.onClick} type={props.type}>{props.children}</button>;
};
export default Button;
