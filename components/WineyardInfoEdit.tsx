import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function WineyardInfoEdit({ thisWineyard }: any) {
  const { name, place, note, id } = thisWineyard[0]
  const { email, setEditWineyardInfo, setWineyardsLoading } = useStateContext()
  const router = useRouter()

  const [nameForm, setNameForm] = useState("")
  const [placeForm, setPlaceForm] = useState("")
  const [noteForm, setNoteForm] = useState("")

  const nameValue = (e: any) => {
    setNameForm(e.target.value)
  }

  const placeValue = (e: any) => {
    setPlaceForm(e.target.value)
  }

  const noteValue = (e: any) => {
    setNoteForm(e.target.value)
  }

  const submitNote = async () => {
    const slug =
      nameForm.replace(/\s+/g, "-") + "-" + placeForm.replace(/\s+/g, "-")
    try {
      await updateDoc(doc(db, "winemakers", email, "wineyards", id), {
        name: nameForm,
        place: placeForm,
        note: noteForm,
        slug: slug,
      })
      setEditWineyardInfo(false)
      setWineyardsLoading(false)
      toast.success("Vinohrad upraven!")
      router.push(`/wineyards`)
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  const showInput = () => {
    setEditWineyardInfo(false)
  }

  useEffect(() => {
    const addName = document.getElementById("nameInput")
    if (addName != null) {
      ;(addName as HTMLInputElement).value = name
      setNameForm(name)
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
          <strong>Upravit vinohrad</strong>
        </label>
        <div className={styles.inputs}>
          <label>
            Název
            <input
              type="text"
              placeholder="Název"
              onChange={nameValue}
              id="nameInput"
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
            Upravit vinohrad
          </button>
        </div>
      </div>
      <div className={styles.closeBox}>
        <VscError onClick={showInput} />
      </div>
    </div>
  )
}
