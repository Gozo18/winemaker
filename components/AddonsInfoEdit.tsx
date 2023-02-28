import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function AddonsInfoEdit({ w, wineId }: any) {
  const { date, additive, amount, note, id } = w
  const { email, setEditAddons, setWinesLoading } = useStateContext()

  const [dateEdit, setDate] = useState("")
  const [additiveEdit, setAdditive] = useState("")
  const [amountEdit, setAmount] = useState("")
  const [noteEdit, setNote] = useState("")

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
      await updateDoc(
        doc(db, "winemakers", email, "wines", wineId, "addons", id),
        {
          date: String(dateEdit),
          additive: additiveEdit,
          amount: amountEdit,
          note: noteEdit,
        }
      )
      setEditAddons("")
      setWinesLoading(false)
      toast.success("Sběr upraven!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  const showInput = () => {
    setEditAddons("")
  }

  useEffect(() => {
    const addDate = document.getElementById("datePicker")
    if (addDate != null) {
      ;(addDate as HTMLInputElement).value = date
      setDate(date)
    }
    const addAditive = document.getElementById("aditiveInput")
    if (addAditive != null) {
      ;(addAditive as HTMLInputElement).value = additive
      setAdditive(additive)
    }
    const addAmount = document.getElementById("amountInput")
    if (addAmount != null) {
      ;(addAmount as HTMLInputElement).value = amount
      setAmount(amount)
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
          <strong>Upravit sběr</strong>
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
            <select name="addons" id="aditiveInput" onChange={additiveValue}>
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
              id="amountInput"
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
