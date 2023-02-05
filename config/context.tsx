import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  //Our application state
  const [data, setData] = useState();

  

  return (
    <Context.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);