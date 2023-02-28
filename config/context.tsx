import { createContext, useContext, useState } from "react"
import { db } from "./firebase"
import { collection, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"

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
  editWineInfo: boolean
  setEditWineInfo: any
  email: any
  setEmail: any
  loggedIn: any
  setLoggedIn: any
  addPickupVisibility: boolean
  setAddPickupVisibility: any
  editPickup: boolean
  setEditPickup: any
  addAnVisibility: boolean
  setAddAnVisibility: any
  editAn: boolean
  setEditAn: any
  addAddonsVisibility: boolean
  setAddAddonsVisibility: any
  editAddons: boolean
  setEditAddons: any
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
  editWineInfo: false,
  setEditWineInfo: () => {},
  email: "",
  setEmail: () => {},
  loggedIn: false,
  setLoggedIn: () => {},
  addPickupVisibility: false,
  setAddPickupVisibility: () => {},
  editPickup: false,
  setEditPickup: () => {},
  addAnVisibility: false,
  setAddAnVisibility: () => {},
  editAn: false,
  setEditAn: () => {},
  addAddonsVisibility: false,
  setAddAddonsVisibility: () => {},
  editAddons: false,
  setEditAddons: () => {},
}

const Context = createContext<contextType>(contextDefaultValues)

export const StateContext = ({ children }: any) => {
  //User
  const [email, setEmail] = useState()
  const [loggedIn, setLoggedIn] = useState(false)

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
  const [editWineInfo, setEditWineInfo] = useState(false)

  //Pickup(Harvest)
  const [addPickupVisibility, setAddPickupVisibility] = useState(false)
  const [editPickup, setEditPickup] = useState(false)

  //Analytics
  const [addAnVisibility, setAddAnVisibility] = useState(false)
  const [editAn, setEditAn] = useState(false)

  //Addons
  const [addAddonsVisibility, setAddAddonsVisibility] = useState(false)
  const [editAddons, setEditAddons] = useState(false)

  //Wineyards

  //Additives
  const [addAdditivesVisibility, setaddAdditivesVisibility] = useState(false)
  const [additivesLoading, setAdditivesLoading] = useState(false)
  const [additivesData, setAdditivesData] = useState([])
  const [editAdditive, setEditAdditive] = useState()

  //Wines data
  if (email && !winesLoading) {
    const wineQuery = async () => {
      try {
        const winesData: any = await getDocs(
          collection(db, "winemakers", email, "wines")
        )
        const winesArray: any = []
        winesData.forEach((doc: any) => {
          const pushData = doc.data()
          pushData.id = doc.id
          winesArray.push(pushData)
        })
        winesArray.sort((a: any, b: any) => a.name.localeCompare(b.name))
        winesArray.map((wine: any) => {
          wine.harvest = []
          const harvestQuery = async () => {
            try {
              const harvestData: any = await getDocs(
                collection(db, "winemakers", email, "wines", wine.id, "harvest")
              )
              harvestData.forEach((doc: any, i: number) => {
                const pushData = doc.data()
                pushData.id = doc.id
                pushData.timestamp = new Date(doc.data().date)
                wine.harvest.push(pushData)
                wine.harvest
                  .sort((a: any, b: any) => a.timestamp - b.timestamp)
                  .reverse()
              })
            } catch (err) {
              toast.error("Něco se nepovedlo!")
            }
          }

          harvestQuery()

          wine.analytics = []
          const analyticsQuery = async () => {
            try {
              const analyticsData: any = await getDocs(
                collection(
                  db,
                  "winemakers",
                  email,
                  "wines",
                  wine.id,
                  "analytics"
                )
              )
              analyticsData.forEach((doc: any, i: number) => {
                const pushData = doc.data()
                pushData.id = doc.id
                pushData.timestamp = new Date(doc.data().date)
                wine.analytics.push(pushData)
                wine.analytics
                  .sort((a: any, b: any) => a.timestamp - b.timestamp)
                  .reverse()
              })
            } catch (err) {
              toast.error("Něco se nepovedlo!")
            }
          }

          analyticsQuery()

          wine.addons = []
          const addonsQuery = async () => {
            try {
              const addonsData: any = await getDocs(
                collection(db, "winemakers", email, "wines", wine.id, "addons")
              )
              addonsData.forEach((doc: any, i: number) => {
                const pushData = doc.data()
                pushData.id = doc.id
                pushData.timestamp = new Date(doc.data().date)
                wine.addons.push(pushData)
                wine.addons
                  .sort((a: any, b: any) => a.timestamp - b.timestamp)
                  .reverse()
              })
            } catch (err) {
              toast.error("Něco se nepovedlo!")
            }
          }

          addonsQuery()
        })
        setTimeout(() => {
          setWinesData(winesArray)
          localStorage.setItem("wines", JSON.stringify(winesArray))
        }, 1000)
        setWinesLoading(true)
      } catch (err) {
        toast.error("Něco se nepovedlo!")
      }
    }

    wineQuery()
  }

  //Additives data
  if (email && !additivesLoading) {
    const additivesQuery = async () => {
      try {
        const additivesData: any = await getDocs(
          collection(db, "winemakers", email, "additives")
        )
        const additivesArray: any = []
        additivesData.forEach((doc: any) => {
          const pushData = doc.data()
          pushData.id = doc.id
          additivesArray.push(pushData)
        })
        additivesArray.sort((a: any, b: any) => a.name.localeCompare(b.name))

        setAdditivesLoading(true)
        setAdditivesData(additivesArray)
        localStorage.setItem("additives", JSON.stringify(additivesArray))
      } catch (err) {
        toast.error("Něco se nepovedlo!")
      }
    }

    additivesQuery()
    console.log("in")
  }

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
        editWineInfo,
        setEditWineInfo,
        email,
        setEmail,
        loggedIn,
        setLoggedIn,
        addPickupVisibility,
        setAddPickupVisibility,
        editPickup,
        setEditPickup,
        addAnVisibility,
        setAddAnVisibility,
        editAn,
        setEditAn,
        addAddonsVisibility,
        setAddAddonsVisibility,
        editAddons,
        setEditAddons,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
