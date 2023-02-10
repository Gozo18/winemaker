import { createContext, useContext, useState } from "react"

type contextType = {
  notesLoading: boolean
  setNotesLoading: any
  notesData: any
  setNotesData: any
  addNoteVisibility: boolean
  setaddNoteVisibility: any
  editNote: any
  setEditNote: any
  addAdditivesVisibility: boolean
  setaddAdditivesVisibility: any
  additivesLoading: boolean
  setAdditivesLoading: any
  additivesData: any
  setAdditivesData: any
  editAdditive: any
  setEditAdditive: any
  addWineVisibility: boolean
  setAddWineVisibility: any
  winesLoading: boolean
  setWinesLoading: any
  winesData: any
  setWinesData: any
  wineLoading: boolean
  setWineLoading: any
  wineData: any
  setWineData: any
}

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
  editAdditive: "",
  setEditAdditive: () => {},
  addWineVisibility: false,
  setAddWineVisibility: () => {},
  winesLoading: false,
  setWinesLoading: () => {},
  winesData: [],
  setWinesData: () => {},
  wineLoading: false,
  setWineLoading: () => {},
  wineData: [],
  setWineData: () => {},
}

const Context = createContext<contextType>(contextDefaultValues)

export const StateContext = ({ children }: any) => {
  //Notes
  const [notesLoading, setNotesLoading] = useState(false)
  const [notesData, setNotesData] = useState([])
  const [addNoteVisibility, setaddNoteVisibility] = useState(false)
  const [editNote, setEditNote] = useState()

  //Wines
  const [addWineVisibility, setAddWineVisibility] = useState(false)
  const [winesLoading, setWinesLoading] = useState(false)
  const [winesData, setWinesData] = useState([])

  //Wine
  const [wineLoading, setWineLoading] = useState(false)
  const [wineData, setWineData] = useState([])

  //Wineyards

  //Additives
  const [addAdditivesVisibility, setaddAdditivesVisibility] = useState(false)
  const [additivesLoading, setAdditivesLoading] = useState(false)
  const [additivesData, setAdditivesData] = useState([])
  const [editAdditive, setEditAdditive] = useState()

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
        editAdditive,
        setEditAdditive,
        addWineVisibility,
        setAddWineVisibility,
        winesLoading,
        setWinesLoading,
        winesData,
        setWinesData,
        wineLoading,
        setWineLoading,
        wineData,
        setWineData,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
