// import { useState, useEffect } from "react";
// // import { Fragment } from "react";
// import Button from "./components/Button";

import HomePage from "./components/HomePage";
import DataContext from "./components/store/data-context";

const App = () => {
  //   useEffect(() => {
  //    const time =  setTimeout(() => {
  //         console.log(clicked);
  //     }, 5000)
  //     // console.log(clicked);
  //     // console.log("I was clicked");
  //   }, [clicked]);
    const data = {
        name: 'Joel',
    }
  return (
    <DataContext.Provider value={data}>
      <HomePage />
    </DataContext.Provider>
  );
};
export default App;
