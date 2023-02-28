import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function JarsInfoItemEdit({ w, wineId }: any) {
  const { date, jar, note, id } = w
  const { email, setEditJars, setWinesLoading } = useStateContext()

  const [dateEdit, setDate] = useState("")
  const [jarEdit, setJar] = useState("")
  const [noteEdit, setNote] = useState("")

  const dateValue = (e: any) => {
    setDate(e.target.value)
  }

  const jarValue = (e: any) => {
    setJar(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    try {
      await updateDoc(
        doc(db, "winemakers", email, "wines", wineId, "jars", id),
        {
          date: String(dateEdit),
          jar: jarEdit,
          note: noteEdit,
        }
      )
      setEditJars("")
      setWinesLoading(false)
      toast.success("Nádoba upravena!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  const showInput = () => {
    setEditJars("")
  }

  useEffect(() => {
    const addDate = document.getElementById("datePicker")
    if (addDate != null) {
      ;(addDate as HTMLInputElement).value = date
      setDate(date)
    }
    const addJar = document.getElementById("jarInput")
    if (addJar != null) {
      ;(addJar as HTMLInputElement).value = jar
      setJar(jar)
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
          <strong>Upravit nádobu</strong>
        </label>
        <div className={styles.inputs}>
          <label>
            Vyberte datum{" "}
            <input
              type="date"
              className={styles.date}
              onChange={dateValue}
              id="datePicker"
            />
          </label>
          <label>
            Nádoba
            <input
              type="text"
              placeholder="Nádoba"
              onChange={jarValue}
              id="jarInput"
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
            Upravit nádobu
          </button>
        </div>
      </div>
      <div className={styles.closeBox}>
        <VscError onClick={showInput} />
      </div>
    </div>
  )
}
