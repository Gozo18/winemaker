import { useState } from "react"
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/AddNote.module.scss"

export default function WineyardForm() {
  const { email, setAddWineyardVisibility, setWineyardsLoading } =
    useStateContext()

  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  const [note, setNote] = useState("")

  const nameValue = (e: any) => {
    setName(e.target.value)
  }

  const placeValue = (e: any) => {
    setPlace(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    const slug = name.replace(/\s+/g, "-") + "-" + place.replace(/\s+/g, "-")
    try {
      await addDoc(collection(db, "winemakers", email, "wineyards"), {
        name: name,
        place: place,
        note: note,
        slug: slug,
      })
      setAddWineyardVisibility(false)
      setWineyardsLoading(false)
      toast.success("Vinohrad přidán!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Přidat vinohrad</strong>
        </label>
        <div className={styles.inputs}>
          <label>
            Název
            <input
              type="text"
              placeholder="Název"
              onChange={nameValue}
              required
            />
          </label>
          <label>
            Trať
            <input
              type="text"
              placeholder="Trať"
              onChange={placeValue}
              required
            />
          </label>
          <label className={styles.longLabel}>
            Poznámka
            <input type="text" placeholder="Poznámka" onChange={noteValue} />
          </label>
          <button className={styles.button} onClick={submitNote}>
            Přidat vinohrad
          </button>
        </div>
      </div>
    </div>
  )
}
