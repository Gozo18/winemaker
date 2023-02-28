import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { collection, addDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/AddNote.module.scss"

export default function AddonsForm({ id }: any) {
  const { email, setAddAddonsVisibility, setWinesLoading } = useStateContext()

  const [date, setDate] = useState("")
  const [additive, setAdditive] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")

  let additivesStorage: any = localStorage.getItem("additives")

  let additivesJson: any = JSON.parse(additivesStorage)

  const dateValue = (e: any) => {
    setDate(e.target.value)
  }

  const additiveValue = (e: any) => {
    setAdditive(e.target.value)
  }

  const amountValue = (e: any) => {
    setAmount(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    try {
      await addDoc(collection(db, "winemakers", email, "wines", id, "addons"), {
        date: String(date),
        additive: additive,
        amount: amount,
        note: note,
      })
      setAddAddonsVisibility(false)
      setWinesLoading(false)
      toast.success("Přípravek přidán!")
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
          <strong>Přidat přípravek</strong>
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
            Přípravek
            <select name="addons" id="addons" onChange={additiveValue}>
              {additivesJson.map((add: any, i: any) => (
                <option value={add.name} key={i}>
                  {add.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Množství
            <input
              type="text"
              placeholder="Množství"
              onChange={amountValue}
              required
            />
          </label>
          <label>
            Poznámka
            <input type="text" placeholder="Poznámka" onChange={noteValue} />
          </label>
          <button className={styles.button} onClick={submitNote}>
            Přidat přípravek
          </button>
        </div>
      </div>
    </div>
  )
}
