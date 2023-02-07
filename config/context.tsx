import { createContext, useContext, useState } from "react"

type contextType = {
    notesLoading: boolean,
    setNotesLoading: any,
    notesData: any,
    setNotesData: any,
    addNoteVisibility: boolean,
    setaddNoteVisibility: any,
    editNote: any,
    setEditNote: any,
    addAdditivesVisibility: boolean,
    setaddAdditivesVisibility: any,
    additivesLoading: boolean,
    setAdditivesLoading: any,
    additivesData: any,
    setAdditivesData: any,
};

const contextDefaultValues: contextType = {
    notesLoading: false,
    setNotesLoading: () => {},
    notesData: [],
    setNotesData: () => {},
    addNoteVisibility: false,
    setaddNoteVisibility: () => {},
    editNote: "",
    setEditNote: () => {},
    addAdditivesVisibility: false,
    setaddAdditivesVisibility: () => {},
    additivesLoading: false,
    setAdditivesLoading: () => {},
    additivesData: [],
    setAdditivesData: () => {},
};

const Context = createContext<contextType>(contextDefaultValues);

export const StateContext = ({ children }: any) => {
  //Notes
  const [notesLoading, setNotesLoading] = useState(false);
  const [notesData, setNotesData] = useState([]);
  const [addNoteVisibility, setaddNoteVisibility] = useState(false);
  const [editNote, setEditNote] = useState();

  //Wines

  //Wineyards

  //Additives
  const [addAdditivesVisibility, setaddAdditivesVisibility] = useState(false);
  const [additivesLoading, setAdditivesLoading] = useState(false);
  const [additivesData, setAdditivesData] = useState([]);

  return (
    <Context.Provider
      value={{
        notesLoading,
        setNotesLoading,
        notesData,
        setNotesData,
        addNoteVisibility,
        setaddNoteVisibility,
        editNote,
        setEditNote,
        addAdditivesVisibility,
        setaddAdditivesVisibility,
        additivesLoading,
        setAdditivesLoading,
        additivesData,
        setAdditivesData,
      }}
      >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);