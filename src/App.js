// import Login from "./components/Login/Login";

// import "./App.css";

// const App = () => {
//   const getData = (data) => {
//     // Data gotten from the child
//     console.log(data);
//   };

//   // We passed the function to get Data d
//   return <Login onConfirm={getData} />;
// };
// export default App;

import Login from "./components/Login/Login";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    {/* This makes the header persisit on all pages */}
      <Header /> 

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;
