import "./Card.css";

// Anything wrapped with this component will have the same style. Styles cn also be declared to it whenever it is been used.
const Card = (props) => {
  return <div className={`${props.className} card`}>{props.children}</div>;
};
export default Card;
