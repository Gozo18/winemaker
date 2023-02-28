import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function FiltersInfoEdit({ w, wineId }: any) {
  const { date, note, id } = w
  const { email, setEditFilters, setWinesLoading } = useStateContext()

  const [dateEdit, setDate] = useState("")
  const [noteEdit, setNote] = useState("")

  const dateValue = (e: any) => {
    setDate(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    try {
      await updateDoc(
        doc(db, "winemakers", email, "wines", wineId, "filters", id),
        {
          date: String(dateEdit),
          note: noteEdit,
        }
      )
      setEditFilters("")
      setWinesLoading(false)
      toast.success("Filtrace upravena!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  const showInput = () => {
    setEditFilters("")
  }

  useEffect(() => {
    const addDate = document.getElementById("datePicker")
    if (addDate != null) {
      ;(addDate as HTMLInputElement).value = date
      setDate(date)
    }
    const addNote = document.getElementById("noteInput")
    if (addNote != null) {
      ;(addNote as HTMLInputElement).value = note
      setNote(note)
    }
  }, [])

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Upravit filtraci</strong>
        </label>
        <div className={styles.inputs}>
          <label className={styles.longLabel}>
            Vyberte datum{" "}
            <input
              type="date"
              className={styles.date}
              onChange={dateValue}
              id="datePicker"
            />
          </label>
          <label className={styles.longLabel}>
            Poznámka
            <input
              type="text"
              placeholder="Poznámka"
              onChange={noteValue}
              id="noteInput"
            />
          </label>
          <button className={styles.button} onClick={submitNote}>
            Upravit filtraci
          </button>
        </div>
      </div>
      <div className={styles.closeBox}>
        <VscError onClick={showInput} />
      </div>
    </div>
  )
}
