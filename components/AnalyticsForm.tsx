import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { collection, addDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/AddNote.module.scss"

export default function AnalyticsForm({ id }: any) {
  const { email, setAddAnVisibility, setWinesLoading } = useStateContext()

  const [date, setDate] = useState("")
  const [sugar, setSugar] = useState("")
  const [sugarGlu, setSugarGlu] = useState("")
  const [sugarFru, setSugarFru] = useState("")
  const [sugarSach, setSugarSach] = useState("")
  const [alcoholReal, setAlcoholReal] = useState("")
  const [alcoholAll, setAlcoholAll] = useState("")
  const [density, setDensity] = useState("")
  const [acidAll, setAcidAll] = useState("")
  const [acidVol, setAcidVol] = useState("")
  const [withoutSugar, setWithoutSugar] = useState("")
  const [so2Free, setSo2Free] = useState("")
  const [so2All, setSo2All] = useState("")
  const [note, setNote] = useState("")

  const dateValue = (e: any) => {
    setDate(e.target.value)
  }

  const sugarValue = (e: any) => {
    setSugar(e.target.value)
  }

  const sugarGluValue = (e: any) => {
    setSugarGlu(e.target.value)
  }

  const sugarFruValue = (e: any) => {
    setSugarFru(e.target.value)
  }

  const sugarSachValue = (e: any) => {
    setSugarSach(e.target.value)
  }

  const alcoholRealValue = (e: any) => {
    setAlcoholReal(e.target.value)
  }

  const alcoholAllValue = (e: any) => {
    setAlcoholAll(e.target.value)
  }

  const densityValue = (e: any) => {
    setDensity(e.target.value)
  }

  const acidAllValue = (e: any) => {
    setAcidAll(e.target.value)
  }

  const acidVolValue = (e: any) => {
    setAcidVol(e.target.value)
  }

  const withoutSugarValue = (e: any) => {
    setWithoutSugar(e.target.value)
  }

  const so2FreeValue = (e: any) => {
    setSo2Free(e.target.value)
  }

  const so2AllValue = (e: any) => {
    setSo2All(e.target.value)
  }

  const noteValue = (e: any) => {
    setNote(e.target.value)
  }

  const submitNote = async () => {
    try {
      await addDoc(
        collection(db, "winemakers", email, "wines", id, "analytics"),
        {
          date: String(date),
          sugar: sugar,
          sugarGlu: sugarGlu,
          sugarFru: sugarFru,
          sugarSach: sugarSach,
          alcoholReal: alcoholReal,
          alcoholAll: alcoholAll,
          density: density,
          acidAll: acidAll,
          acidVol: acidVol,
          withoutSugar: withoutSugar,
          so2Free: so2Free,
          so2All: so2All,
          note: note,
        }
      )
      setAddAnVisibility(false)
      setWinesLoading(false)
      toast.success("Analytika přidána!")
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
          <strong>Přidat analytiku</strong>
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
            Cukr
            <input type="text" placeholder="Cukr" onChange={sugarValue} />
          </label>
          <label>
            Glukóza
            <input type="text" placeholder="Glukóza" onChange={sugarGluValue} />
          </label>
          <label>
            Fruktóza
            <input
              type="text"
              placeholder="Fruktóza"
              onChange={sugarFruValue}
            />
          </label>
          <label>
            Sacharóza
            <input
              type="text"
              placeholder="Sacharóza"
              onChange={sugarSachValue}
            />
          </label>
          <label>
            Alkohol skutečný
            <input
              type="text"
              placeholder="Alkohol skutečný"
              onChange={alcoholRealValue}
            />
          </label>
          <label>
            Alkohol celkový
            <input
              type="text"
              placeholder="Alkohol celkový"
              onChange={alcoholAllValue}
            />
          </label>
          <label>
            Hustota relativní
            <input
              type="text"
              placeholder="Hustota relativní"
              onChange={densityValue}
            />
          </label>
          <label>
            Celkové kyseliny
            <input
              type="text"
              placeholder="Celkové kyseliny"
              onChange={acidAllValue}
            />
          </label>
          <label>
            Těkavé kyseliny
            <input
              type="text"
              placeholder="Těkavé kyseliny"
              onChange={acidVolValue}
            />
          </label>
          <label>
            Bezcukerný extrakt
            <input
              type="text"
              placeholder="Bezcukerný extrakt"
              onChange={withoutSugarValue}
            />
          </label>
          <label>
            SO2 volný
            <input
              type="text"
              placeholder="SO2 volný"
              onChange={so2FreeValue}
            />
          </label>
          <label>
            SO2 veškerý
            <input
              type="text"
              placeholder="SO2 veškerý"
              onChange={so2AllValue}
            />
          </label>
          <label>
            Poznámka
            <input type="text" placeholder="Poznámka" onChange={noteValue} />
          </label>
          <button className={styles.button} onClick={submitNote}>
            Přidat analytiku
          </button>
        </div>
      </div>
    </div>
  )
}
