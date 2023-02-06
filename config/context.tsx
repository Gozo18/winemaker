import { createContext, useContext, useState } from "react"

type contextType = {
    data: any,
    setData: any,
    addNoteVisibility: boolean,
    setaddNoteVisibility: any,
};

const contextDefaultValues: contextType = {
    data: {},
    setData: () => {},
    addNoteVisibility: false,
    setaddNoteVisibility: () => {},
};

const Context = createContext<contextType>(contextDefaultValues);

export const StateContext = ({ children }: any) => {
  //Our application state
  const [data, setData] = useState();

  const [addNoteVisibility, setaddNoteVisibility] = useState(false);

  

  return (
    <Context.Provider
      value={{
        data,
        setData,
        addNoteVisibility,
        setaddNoteVisibility
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);