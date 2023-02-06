import { createContext, useContext, useState } from "react"

type contextType = {
    notesLoading: boolean,
    setNotesLoading: any,
    notesData: any,
    setNotesData: any,
    addNoteVisibility: boolean,
    setaddNoteVisibility: any,
};

const contextDefaultValues: contextType = {
    notesLoading: false,
    setNotesLoading: () => {},
    notesData: [],
    setNotesData: () => {},
    addNoteVisibility: false,
    setaddNoteVisibility: () => {},
};

const Context = createContext<contextType>(contextDefaultValues);

export const StateContext = ({ children }: any) => {
  //Notes
  const [notesLoading, setNotesLoading] = useState(false);
  const [notesData, setNotesData] = useState([]);
  const [addNoteVisibility, setaddNoteVisibility] = useState(false);

  //Wines

  //Wineyards

  //Additives

  return (
    <Context.Provider
      value={{
        notesLoading,
        setNotesLoading,
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