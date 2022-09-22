import Login from "./components/Login/Login";

import "./App.css";

const App = () => {
  const getData = (data) => {
    // Data gotten from the child
    console.log(data);
  };

  // We passed the function to get Data d
  return <Login onConfirm={getData} />;
};
export default App;
