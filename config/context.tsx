import { createContext, useContext, useState } from "react"

type contextType = {
    notesData: boolean,
    setNotesData: any,
    addNoteVisibility: boolean,
    setaddNoteVisibility: any,
};

const contextDefaultValues: contextType = {
    notesData: false,
    setNotesData: () => {},
    addNoteVisibility: false,
    setaddNoteVisibility: () => {},
};

const Context = createContext<contextType>(contextDefaultValues);

export const StateContext = ({ children }: any) => {
  //Our application state
  const [notesData, setNotesData] = useState(false);

  const [addNoteVisibility, setaddNoteVisibility] = useState(false);

  

  return (
    <Context.Provider
      value={{
        notesData,
        setNotesData,
        addNoteVisibility,
        setaddNoteVisibility
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);