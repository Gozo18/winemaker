import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { collection, addDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/AddNote.module.scss"

export default function TendsForm({ id }: any) {
  const { email, setAddTendsVisibility, setWinesLoading } = useStateContext()

  const [date, setDate] = useState("")
  const [note, setNote] = useState("")

  const dateValue = (e: any) => {
    setDate(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    try {
      await addDoc(collection(db, "winemakers", email, "wines", id, "tends"), {
        date: String(date),
        note: note,
      })
      setAddTendsVisibility(false)
      setWinesLoading(false)
      toast.success("Stáčka přidána!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  useEffect(() => {
    const addInput = document.getElementById("datePicker")
    if (addInput != null) {
      ;(addInput as HTMLInputElement).valueAsDate = new Date()
      setDate((addInput as HTMLInputElement).value)
    }
  }, [])

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Přidat stáčku</strong>
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
            <input type="text" placeholder="Poznámka" onChange={noteValue} />
          </label>
          <button className={styles.button} onClick={submitNote}>
            Přidat stáčku
          </button>
        </div>
      </div>
    </div>
  )
}
