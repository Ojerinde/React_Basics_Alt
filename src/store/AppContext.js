import React from "react";

const AppContext = React.createContext({
  items: [],
  totalItems: 0,
  createItem: (data) => {},
  deleteItem: (id) => {},
});
export default AppContext