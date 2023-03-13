import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { collection, addDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/AddNote.module.scss"

export default function WineyardDoingsForm({ id }: any) {
  const { email, setAddDoingsVisibility, setWineyardsLoading } =
    useStateContext()

  const [date, setDate] = useState("")
  const [additive, setAdditive] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")

  let spraysStorage: any = localStorage.getItem("sprays")

  let spraysJson: any = JSON.parse(spraysStorage)

  const dateValue = (e: any) => {
    setDate(e.target.value)
  }

  const additiveValue = (e: any) => {
    setAdditive(e.target.value)
  }
  console.log(additive)

  const amountValue = (e: any) => {
    setAmount(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    let thisAddon = spraysJson.filter(function (e: any) {
      return e.name === additive
    })
    const price = (
      (thisAddon[0].price / thisAddon[0].pack) *
      Number(amount)
    ).toFixed(2)
    try {
      await addDoc(
        collection(db, "winemakers", email, "wineyards", id, "doings"),
        {
          date: String(date),
          additive: additive,
          amount: amount,
          price: price,
          note: note,
        }
      )
      setAddDoingsVisibility(false)
      setWineyardsLoading(false)
      toast.success("Činnost přidána!")
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
    const arraySp: any = []
    spraysJson.map((add: any) => {
      arraySp.push(add.name)
    })
    setAdditive(arraySp[0])
  }, [])

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Přidat činnost</strong>
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
              {spraysJson.map((add: any, i: any) => (
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
            Přidat činnost
          </button>
        </div>
      </div>
    </div>
  )
}
