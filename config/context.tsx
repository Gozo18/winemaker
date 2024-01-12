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
  addTendsVisibility: boolean
  setAddTendsVisibility: any
  editTends: boolean
  setEditTends: any
  addFiltersVisibility: boolean
  setAddFiltersVisibility: any
  editFilters: boolean
  setEditFilters: any
  addJarsVisibility: boolean
  setAddJarsVisibility: any
  editJars: boolean
  setEditJars: any
  addBottlesVisibility: boolean
  setAddBottlesVisibility: any
  editBottles: boolean
  setEditBottles: any
  addSpraysVisibility: boolean
  setaddSpraysVisibility: any
  spraysLoading: boolean
  setSpraysLoading: any
  editSpray: any
  setEditSpray: any
  spraysData: any
  setSpraysData: any
  addWineyardVisibility: boolean
  setAddWineyardVisibility: any
  wineyardsLoading: boolean
  setWineyardsLoading: any
  wineyardsData: any
  setWineyardsData: any
  editWineyardInfo: boolean
  setEditWineyardInfo: any
  addDoingsVisibility: boolean
  setAddDoingsVisibility: any
  editDoings: boolean
  setEditDoings: any
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
  addTendsVisibility: false,
  setAddTendsVisibility: () => {},
  editTends: false,
  setEditTends: () => {},
  addFiltersVisibility: false,
  setAddFiltersVisibility: () => {},
  editFilters: false,
  setEditFilters: () => {},
  addJarsVisibility: false,
  setAddJarsVisibility: () => {},
  editJars: false,
  setEditJars: () => {},
  addBottlesVisibility: false,
  setAddBottlesVisibility: () => {},
  editBottles: false,
  setEditBottles: () => {},
  addSpraysVisibility: false,
  setaddSpraysVisibility: () => {},
  spraysLoading: false,
  setSpraysLoading: () => {},
  editSpray: "",
  setEditSpray: () => {},
  spraysData: [],
  setSpraysData: () => {},
  addWineyardVisibility: false,
  setAddWineyardVisibility: () => {},
  wineyardsLoading: false,
  setWineyardsLoading: () => {},
  wineyardsData: [],
  setWineyardsData: () => {},
  editWineyardInfo: false,
  setEditWineyardInfo: () => {},
  addDoingsVisibility: false,
  setAddDoingsVisibility: () => {},
  editDoings: false,
  setEditDoings: () => {},
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

  //Tends
  const [addTendsVisibility, setAddTendsVisibility] = useState(false)
  const [editTends, setEditTends] = useState(false)

  //Filters
  const [addFiltersVisibility, setAddFiltersVisibility] = useState(false)
  const [editFilters, setEditFilters] = useState(false)

  //Jars
  const [addJarsVisibility, setAddJarsVisibility] = useState(false)
  const [editJars, setEditJars] = useState(false)

  //Bottles
  const [addBottlesVisibility, setAddBottlesVisibility] = useState(false)
  const [editBottles, setEditBottles] = useState(false)

  //Wineyards
  const [addWineyardVisibility, setAddWineyardVisibility] = useState(false)
  const [wineyardsLoading, setWineyardsLoading] = useState(false)
  const [wineyardsData, setWineyardsData] = useState([])

  const [editWineyardInfo, setEditWineyardInfo] = useState(false)

  //Wineyard doings
  const [addDoingsVisibility, setAddDoingsVisibility] = useState(false)
  const [editDoings, setEditDoings] = useState(false)

  //Additives
  const [addAdditivesVisibility, setaddAdditivesVisibility] = useState(false)
  const [additivesLoading, setAdditivesLoading] = useState(false)
  const [additivesData, setAdditivesData] = useState([])
  const [editAdditive, setEditAdditive] = useState()

  //Sprays
  const [addSpraysVisibility, setaddSpraysVisibility] = useState(false)
  const [spraysLoading, setSpraysLoading] = useState(false)
  const [spraysData, setSpraysData] = useState([])
  const [editSpray, setEditSpray] = useState()

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
          //harvests data
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

          //analytics data
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

          //addons data
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

          //tends data
          wine.tends = []
          const tendsQuery = async () => {
            try {
              const tendsData: any = await getDocs(
                collection(db, "winemakers", email, "wines", wine.id, "tends")
              )
              tendsData.forEach((doc: any, i: number) => {
                const pushData = doc.data()
                pushData.id = doc.id
                pushData.timestamp = new Date(doc.data().date)
                wine.tends.push(pushData)
                wine.tends
                  .sort((a: any, b: any) => a.timestamp - b.timestamp)
                  .reverse()
              })
            } catch (err) {
              toast.error("Něco se nepovedlo!")
            }
          }

          tendsQuery()

          //filters data
          wine.filters = []
          const filtersQuery = async () => {
            try {
              const filtersData: any = await getDocs(
                collection(db, "winemakers", email, "wines", wine.id, "filters")
              )
              filtersData.forEach((doc: any, i: number) => {
                const pushData = doc.data()
                pushData.id = doc.id
                pushData.timestamp = new Date(doc.data().date)
                wine.filters.push(pushData)
                wine.filters
                  .sort((a: any, b: any) => a.timestamp - b.timestamp)
                  .reverse()
              })
            } catch (err) {
              toast.error("Něco se nepovedlo!")
            }
          }

          filtersQuery()

          //jars data
          wine.jars = []
          const jarsQuery = async () => {
            try {
              const jarsData: any = await getDocs(
                collection(db, "winemakers", email, "wines", wine.id, "jars")
              )
              jarsData.forEach((doc: any, i: number) => {
                const pushData = doc.data()
                pushData.id = doc.id
                pushData.timestamp = new Date(doc.data().date)
                wine.jars.push(pushData)
                wine.jars
                  .sort((a: any, b: any) => a.timestamp - b.timestamp)
                  .reverse()
              })
            } catch (err) {
              toast.error("Něco se nepovedlo!")
            }
          }

          jarsQuery()

          //bottles data
          wine.bottles = []
          const bottlesQuery = async () => {
            try {
              const bottlesData: any = await getDocs(
                collection(db, "winemakers", email, "wines", wine.id, "bottles")
              )
              bottlesData.forEach((doc: any, i: number) => {
                const pushData = doc.data()
                pushData.id = doc.id
                pushData.timestamp = new Date(doc.data().date)
                wine.bottles.push(pushData)
                wine.bottles
                  .sort((a: any, b: any) => a.timestamp - b.timestamp)
                  .reverse()
              })
            } catch (err) {
              toast.error("Něco se nepovedlo!")
            }
          }

          bottlesQuery()
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
  }

  //Sprays data
  if (email && !spraysLoading) {
    const spraysQuery = async () => {
      try {
        const spraysData: any = await getDocs(
          collection(db, "winemakers", email, "sprays")
        )
        const spraysArray: any = []
        spraysData.forEach((doc: any) => {
          const pushData = doc.data()
          pushData.id = doc.id
          spraysArray.push(pushData)
        })
        spraysArray.sort((a: any, b: any) => a.name.localeCompare(b.name))

        setSpraysLoading(true)
        setSpraysData(spraysArray)
        localStorage.setItem("sprays", JSON.stringify(spraysArray))
      } catch (err) {
        toast.error("Něco se nepovedlo!")
      }
    }

    spraysQuery()
  }

  //Wineyards data
  if (email && !wineyardsLoading) {
    const wineyardsQuery = async () => {
      try {
        const wineyardsData: any = await getDocs(
          collection(db, "winemakers", email, "wineyards")
        )
        const wineyardsArray: any = []
        wineyardsData.forEach((doc: any) => {
          const pushData = doc.data()
          pushData.id = doc.id
          wineyardsArray.push(pushData)
        })
        wineyardsArray.sort((a: any, b: any) => a.name.localeCompare(b.name))
        wineyardsArray.map((wineyard: any) => {
          //addons data
          wineyard.doings = []
          const doingsQuery = async () => {
            try {
              const doingsData: any = await getDocs(
                collection(
                  db,
                  "winemakers",
                  email,
                  "wineyards",
                  wineyard.id,
                  "doings"
                )
              )
              doingsData.forEach((doc: any, i: number) => {
                const pushData = doc.data()
                pushData.id = doc.id
                pushData.timestamp = new Date(doc.data().date)
                wineyard.doings.push(pushData)
                wineyard.doings
                  .sort((a: any, b: any) => a.timestamp - b.timestamp)
                  .reverse()
              })
            } catch (err) {
              toast.error("Něco se nepovedlo!")
            }
          }

          doingsQuery()
        })
        setTimeout(() => {
          setWineyardsData(wineyardsArray)
          localStorage.setItem("wineyards", JSON.stringify(wineyardsArray))
        }, 1000)
        setWineyardsLoading(true)
      } catch (err) {
        toast.error("Něco se nepovedlo!")
      }
    }

    wineyardsQuery()
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
        addTendsVisibility,
        setAddTendsVisibility,
        editTends,
        setEditTends,
        addFiltersVisibility,
        setAddFiltersVisibility,
        editFilters,
        setEditFilters,
        addJarsVisibility,
        setAddJarsVisibility,
        editJars,
        setEditJars,
        addBottlesVisibility,
        setAddBottlesVisibility,
        editBottles,
        setEditBottles,
        addSpraysVisibility,
        setaddSpraysVisibility,
        spraysLoading,
        setSpraysLoading,
        editSpray,
        setEditSpray,
        spraysData,
        setSpraysData,
        addWineyardVisibility,
        setAddWineyardVisibility,
        wineyardsLoading,
        setWineyardsLoading,
        wineyardsData,
        setWineyardsData,
        editWineyardInfo,
        setEditWineyardInfo,
        addDoingsVisibility,
        setAddDoingsVisibility,
        editDoings,
        setEditDoings,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
