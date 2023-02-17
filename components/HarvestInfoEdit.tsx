import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function HarvestInfoEdit({ w, wineId }: any) {
  const { date, sugar, harvestPlace, harvestNote, id } = w
  const { email, setEditPickup, setWinesLoading } = useStateContext()

  const [dateEdit, setDate] = useState("")
  const [sugarEdit, setSugar] = useState("")
  const [placeEdit, setPlace] = useState("")
  const [noteEdit, setNote] = useState("")

  const dateValue = (e: any) => {
    setDate(e.target.value)
  }

  const sugarValue = (e: any) => {
    setSugar(e.target.value)
  }

  const placeValue = (e: any) => {
    setPlace(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    try {
      await updateDoc(
        doc(db, "winemakers", email, "wines", wineId, "harvest", id),
        {
          date: String(dateEdit),
          sugar: sugarEdit,
          harvestPlace: placeEdit,
          harvestNote: noteEdit,
        }
      )
      setEditPickup("")
      setWinesLoading(false)
      toast.success("Sběr upraven!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  const showInput = () => {
    setEditPickup("")
  }

  useEffect(() => {
    const addDate = document.getElementById("dateInput")
    if (addDate != null) {
      ;(addDate as HTMLInputElement).value = date
      setDate(date)
    }
    const addSugar = document.getElementById("sugarInput")
    if (addSugar != null) {
      ;(addSugar as HTMLInputElement).value = sugar
      setSugar(sugar)
    }
    const addPlace = document.getElementById("placeInput")
    if (addPlace != null) {
      ;(addPlace as HTMLInputElement).value = harvestPlace
      setPlace(harvestPlace)
    }
    const addNote = document.getElementById("noteInput")
    if (addNote != null) {
      ;(addNote as HTMLInputElement).value = harvestNote
      setNote(harvestNote)
    }
  }, [])

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Upravit sběr</strong>
        </label>
        <div className={styles.inputs}>
          <span>
            Vyberte datum{" "}
            <input
              type="date"
              className={styles.date}
              onChange={dateValue}
              id="dateInput"
            />
          </span>
          <label>
            Cukernatost
            <input
              type="text"
              placeholder="Cukernatost"
              onChange={sugarValue}
              id="sugarInput"
              required
            />
          </label>
          <label>
            Trať
            <input
              type="text"
              placeholder="Trať"
              onChange={placeValue}
              id="placeInput"
              required
            />
          </label>
          <label>
            Poznámka
            <input
              type="text"
              placeholder="Poznámka"
              onChange={noteValue}
              id="noteInput"
            />
          </label>
          <button className={styles.button} onClick={submitNote}>
            Upravit sběr
          </button>
        </div>
      </div>
      <div className={styles.closeBox}>
        <VscError onClick={showInput} />
      </div>
    </div>
  )
}
