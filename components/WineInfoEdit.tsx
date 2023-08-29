import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function WineInfoEdit({ thisWine, email }: any) {
  const { name, sub, year, place, note, id } = thisWine[0]
  const { setEditWineInfo, setWinesLoading } = useStateContext()
  const router = useRouter()

  const [nameForm, setNameForm] = useState("")
  const [subForm, setSubForm] = useState("")
  const [yearForm, setYearForm] = useState("")
  const [placeForm, setPlaceForm] = useState("")
  const [noteForm, setNoteForm] = useState("")

  const nameValue = (e: any) => {
    setNameForm(e.target.value)
  }

  const subValue = (e: any) => {
    setSubForm(e.target.value)
  }

  const yearValue = (e: any) => {
    setYearForm(e.target.value)
  }

  const placeValue = (e: any) => {
    setPlaceForm(e.target.value)
  }

  const noteValue = (e: any) => {
    setNoteForm(e.target.value)
  }

  const submitNote = async () => {
    const slug =
      nameForm.replace(/\s+/g, "-") +
      "-" +
      yearForm +
      "-" +
      subForm.replace(/\s+/g, "-") +
      "-" +
      placeForm.replace(/\s+/g, "-")
    try {
      await updateDoc(doc(db, "winemakers", email, "wines", id), {
        name: nameForm,
        sub: subForm,
        year: yearForm,
        place: placeForm,
        note: noteForm,
        slug: slug,
      })
      setEditWineInfo(false)
      setWinesLoading(false)
      toast.success("Víno upraveno!")
      /* if router */
      router.push(`/current-wines`)
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  const showInput = () => {
    setEditWineInfo(false)
  }

  useEffect(() => {
    const addName = document.getElementById("nameInput")
    if (addName != null) {
      ;(addName as HTMLInputElement).value = name
      setNameForm(name)
    }
    const addSub = document.getElementById("subInput")
    if (addSub != null) {
      ;(addSub as HTMLInputElement).value = sub
      setSubForm(sub)
    }
    const addYear = document.getElementById("yearInput")
    if (addYear != null) {
      ;(addYear as HTMLInputElement).value = year
      setYearForm(year)
    }
    const addPlace = document.getElementById("placeInput")
    if (addPlace != null) {
      ;(addPlace as HTMLInputElement).value = place
      setPlaceForm(place)
    }
    const addNote = document.getElementById("noteInput")
    if (addNote != null) {
      ;(addNote as HTMLInputElement).value = note
      setNoteForm(note)
    }
  }, [])

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Upravit víno</strong>
        </label>
        <div className={styles.inputs}>
          <label>
            Odrůda
            <input
              type="text"
              placeholder="Odrůda"
              onChange={nameValue}
              id="nameInput"
              required
            />
          </label>
          <label>
            Přívlastek
            <input
              type="text"
              placeholder="Přívlastek"
              onChange={subValue}
              id="subInput"
              required
            />
          </label>
          <label>
            Ročník
            <input
              type="text"
              placeholder="Ročník"
              onChange={yearValue}
              id="yearInput"
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
            Upravit víno
          </button>
        </div>
      </div>
      <div className={styles.closeBox}>
        <VscError onClick={showInput} />
      </div>
    </div>
  )
}
