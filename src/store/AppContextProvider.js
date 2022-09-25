import { useReducer } from "react";
import AppContext from "./AppContext";

const initialState = {
  items: ["Joel", "Bolaji", "Joshua"],
  totalItems: 0,
};

const detailReducer = (state, action) => {
  if (action.type === "CREATE") {
    let updatedState;
    updatedState = [...state.items];
    updatedState.push(action.payload);
    return { items: updatedState, totalItems: updatedState.length };
  }
  if (action.type === "DELETE") {
    const updatedState = state.items.filter((name) => name !== action.payload);
    return { items: updatedState, totalItems: updatedState.length };
  }
  return state;
};

const AppContextProvider = (props) => {
  const [detailState, dispatchFn] = useReducer(detailReducer, initialState);

  const createItem = (data) => {
    dispatchFn({ type: "CREATE", payload: data });
  };
  const deleteItem = (name) => {
    dispatchFn({ type: "DELETE", payload: name });
  };

  const data = {
    items: detailState.items,
    totalItems: detailState.totalItems,
    createItem: createItem,
    deleteItem: deleteItem,
  };
  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
