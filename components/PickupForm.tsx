import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { collection, addDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/AddNote.module.scss"

export default function PickupForm({ id }: any) {
  const { email, setAddPickupVisibility, setWinesLoading } = useStateContext()

  const [date, setDate] = useState("")
  const [sugar, setSugar] = useState("")
  const [place, setPlace] = useState("")
  const [note, setNote] = useState("")

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
      await addDoc(
        collection(db, "winemakers", email, "wines", id, "harvest"),
        {
          date: String(date),
          sugar: sugar,
          harvestPlace: place,
          harvestNote: note,
        }
      )
      setAddPickupVisibility(false)
      setWinesLoading(false)
      toast.success("Sběr přidán!")
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
          <strong>Přidat víno</strong>
        </label>
        <div className={styles.inputs}>
          <span>
            Vyberte datum{" "}
            <input
              type="date"
              className={styles.date}
              onChange={dateValue}
              id="datePicker"
            />
          </span>
          <label>
            Cukernatost
            <input
              type="text"
              placeholder="Cukernatost"
              onChange={sugarValue}
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
          <label>
            Poznámka
            <input type="text" placeholder="Poznámka" onChange={noteValue} />
          </label>
          <button className={styles.button} onClick={submitNote}>
            Přidat sběr
          </button>
        </div>
      </div>
    </div>
  )
}
