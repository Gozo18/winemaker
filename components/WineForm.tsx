import { useState } from "react"
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/AddNote.module.scss"

export default function WineForm({ email }: any) {
  const { setAddWineVisibility, setWinesLoading } = useStateContext()

  const [name, setName] = useState("")
  const [sub, setSub] = useState("")
  const [year, setYear] = useState("")
  const [place, setPlace] = useState("")
  const [note, setNote] = useState("")

  const nameValue = (e: any) => {
    setName(e.target.value)
  }

  const subValue = (e: any) => {
    setSub(e.target.value)
  }

  const yearValue = (e: any) => {
    setYear(e.target.value)
  }

  const placeValue = (e: any) => {
    setPlace(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    const slug =
      name.replace(/\s+/g, "-") +
      "-" +
      year +
      "-" +
      sub.replace(/\s+/g, "-") +
      "-" +
      place.replace(/\s+/g, "-")
    try {
      await addDoc(collection(db, "winemakers", email, "wines"), {
        name: name,
        sub: sub,
        year: year,
        place: place,
        note: note,
        slug: slug,
      })
      setAddWineVisibility(false)
      setWinesLoading(false)
      toast.success("Víno přidáno!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Přidat víno</strong>
        </label>
        <div className={styles.inputs}>
          <label>
            Odrůda
            <input
              type="text"
              placeholder="Odrůda"
              onChange={nameValue}
              required
            />
          </label>
          <label>
            Přívlastek
            <input
              type="text"
              placeholder="Přívlastek"
              onChange={subValue}
              required
            />
          </label>
          <label>
            Ročník
            <input
              type="text"
              placeholder="Ročník"
              onChange={yearValue}
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
            Přidat víno
          </button>
        </div>
      </div>
    </div>
  )
}
