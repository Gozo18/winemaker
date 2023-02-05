import { createContext, useContext, useState } from "react"

type contextType = {
    data: any,
    setData: any,
};

const contextDefaultValues: contextType = {
    data: {},
    setData: () => {},
};

const Context = createContext<contextType>(contextDefaultValues);

export const StateContext = ({ children }: any) => {
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