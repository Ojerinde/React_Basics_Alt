import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";
import AppContext from "./store/AppContext";
import AppContextProvider from "./store/AppContextProvider";

// const data = {name: 'Joel', age: 30}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
    {/* <AppContext.Provider value={data} > */}
      <App />
    {/* </AppContext.Provider> */}

    </AppContextProvider>
  </BrowserRouter>
);
