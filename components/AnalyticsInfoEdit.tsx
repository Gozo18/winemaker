import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function AnalyticsInfoEdit({ w, wineId }: any) {
  const {
    date,
    sugar,
    sugarGlu,
    sugarFru,
    sugarSach,
    alcoholReal,
    alcoholAll,
    density,
    acidAll,
    acidVol,
    withoutSugar,
    so2Free,
    so2All,
    note,
    id,
  } = w
  const { email, setEditAn, setWinesLoading } = useStateContext()

  const [dateEdit, setDateEdit] = useState("")
  const [sugarEdit, setSugarEdit] = useState("")
  const [sugarGluEdit, setSugarGluEdit] = useState("")
  const [sugarFruEdit, setSugarFruEdit] = useState("")
  const [sugarSachEdit, setSugarSachEdit] = useState("")
  const [alcoholRealEdit, setAlcoholRealEdit] = useState("")
  const [alcoholAllEdit, setAlcoholAllEdit] = useState("")
  const [densityEdit, setDensityEdit] = useState("")
  const [acidAllEdit, setAcidAllEdit] = useState("")
  const [acidVolEdit, setAcidVolEdit] = useState("")
  const [withoutSugarEdit, setWithoutSugarEdit] = useState("")
  const [so2FreeEdit, setSo2FreeEdit] = useState("")
  const [so2AllEdit, setSo2AllEdit] = useState("")
  const [noteEdit, setNoteEdit] = useState("")

  const dateValue = (e: any) => {
    setDateEdit(e.target.value)
  }

  const sugarValue = (e: any) => {
    setSugarEdit(e.target.value)
  }

  const sugarGluValue = (e: any) => {
    setSugarGluEdit(e.target.value)
  }

  const sugarFruValue = (e: any) => {
    setSugarFruEdit(e.target.value)
  }

  const sugarSachValue = (e: any) => {
    setSugarSachEdit(e.target.value)
  }

  const alcoholRealValue = (e: any) => {
    setAlcoholRealEdit(e.target.value)
  }

  const alcoholAllValue = (e: any) => {
    setAlcoholAllEdit(e.target.value)
  }

  const densityValue = (e: any) => {
    setDensityEdit(e.target.value)
  }

  const acidAllValue = (e: any) => {
    setAcidAllEdit(e.target.value)
  }

  const acidVolValue = (e: any) => {
    setAcidVolEdit(e.target.value)
  }

  const withoutSugarValue = (e: any) => {
    setWithoutSugarEdit(e.target.value)
  }

  const so2FreeValue = (e: any) => {
    setSo2FreeEdit(e.target.value)
  }

  const so2AllValue = (e: any) => {
    setSo2AllEdit(e.target.value)
  }

  const noteValue = (e: any) => {
    setNoteEdit(e.target.value)
  }

  const submitNote = async () => {
    try {
      await updateDoc(
        doc(db, "winemakers", email, "wines", wineId, "analytics", id),
        {
          date: String(date),
          sugar: sugarEdit,
          sugarGlu: sugarGluEdit,
          sugarFru: sugarFruEdit,
          sugarSach: sugarSachEdit,
          alcoholReal: alcoholRealEdit,
          alcoholAll: alcoholAllEdit,
          density: densityEdit,
          acidAll: acidAllEdit,
          acidVol: acidVolEdit,
          withoutSugar: withoutSugarEdit,
          so2Free: so2FreeEdit,
          so2All: so2AllEdit,
          note: noteEdit,
        }
      )
      setEditAn("")
      setWinesLoading(false)
      toast.success("Analytika upravena!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  const showInput = () => {
    setEditAn("")
  }

  useEffect(() => {
    const addDate = document.getElementById("datePicker")
    if (addDate != null) {
      ;(addDate as HTMLInputElement).value = date
      setDateEdit(date)
    }
    const addSugar = document.getElementById("sugarPicker")
    if (addSugar != null) {
      ;(addSugar as HTMLInputElement).value = sugar
      setSugarEdit(sugar)
    }
    const addSugarGlu = document.getElementById("sugarGluPicker")
    if (addSugarGlu != null) {
      ;(addSugarGlu as HTMLInputElement).value = sugarGlu
      setSugarGluEdit(sugarGlu)
    }
    const addSugarFru = document.getElementById("sugarFruPicker")
    if (addSugarFru != null) {
      ;(addSugarFru as HTMLInputElement).value = sugarFru
      setSugarFruEdit(sugarFru)
    }
    const addSugarSach = document.getElementById("sugarSachPicker")
    if (addSugarSach != null) {
      ;(addSugarSach as HTMLInputElement).value = sugarSach
      setSugarSachEdit(sugarSach)
    }
    const addAlcoholReal = document.getElementById("alcoholRealPicker")
    if (addAlcoholReal != null) {
      ;(addAlcoholReal as HTMLInputElement).value = alcoholReal
      setAlcoholRealEdit(alcoholReal)
    }
    const addAlcoholAll = document.getElementById("alcoholAllPicker")
    if (addAlcoholAll != null) {
      ;(addAlcoholAll as HTMLInputElement).value = alcoholAll
      setAlcoholAllEdit(alcoholAll)
    }
    const addDensity = document.getElementById("densityPicker")
    if (addDensity != null) {
      ;(addDensity as HTMLInputElement).value = density
      setDensityEdit(density)
    }
    const addAcidAll = document.getElementById("acidAllPicker")
    if (addAcidAll != null) {
      ;(addAcidAll as HTMLInputElement).value = acidAll
      setAcidAllEdit(acidAll)
    }
    const addAcidVol = document.getElementById("acidVolPicker")
    if (addAcidVol != null) {
      ;(addAcidVol as HTMLInputElement).value = acidVol
      setAcidVolEdit(acidVol)
    }
    const addWithoutSugar = document.getElementById("withoutSugarPicker")
    if (addWithoutSugar != null) {
      ;(addWithoutSugar as HTMLInputElement).value = withoutSugar
      setWithoutSugarEdit(withoutSugar)
    }
    const addSo2Free = document.getElementById("so2FreePicker")
    if (addSo2Free != null) {
      ;(addSo2Free as HTMLInputElement).value = so2Free
      setSo2FreeEdit(so2Free)
    }
    const addSo2All = document.getElementById("so2AllPicker")
    if (addSo2All != null) {
      ;(addSo2All as HTMLInputElement).value = so2All
      setSo2AllEdit(so2All)
    }
    const addNote = document.getElementById("notePicker")
    if (addNote != null) {
      ;(addNote as HTMLInputElement).value = note
      setNoteEdit(note)
    }
  }, [])

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Upravit analytiku</strong>
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
            <input
              type="text"
              placeholder="Cukr"
              onChange={sugarValue}
              id="sugarPicker"
            />
          </label>
          <label>
            Glukóza
            <input
              type="text"
              placeholder="Glukóza"
              onChange={sugarGluValue}
              id="sugarGluPicker"
            />
          </label>
          <label>
            Fruktóza
            <input
              type="text"
              placeholder="Fruktóza"
              onChange={sugarFruValue}
              id="sugarFruPicker"
            />
          </label>
          <label>
            Sacharóza
            <input
              type="text"
              placeholder="Sacharóza"
              onChange={sugarSachValue}
              id="sugarSachPicker"
            />
          </label>
          <label>
            Alkohol skutečný
            <input
              type="text"
              placeholder="Alkohol skutečný"
              onChange={alcoholRealValue}
              id="alcoholRealPicker"
            />
          </label>
          <label>
            Alkohol celkový
            <input
              type="text"
              placeholder="Alkohol celkový"
              onChange={alcoholAllValue}
              id="alcoholAllPicker"
            />
          </label>
          <label>
            Hustota relativní
            <input
              type="text"
              placeholder="Hustota relativní"
              onChange={densityValue}
              id="densityPicker"
            />
          </label>
          <label>
            Celkové kyseliny
            <input
              type="text"
              placeholder="Celkové kyseliny"
              onChange={acidAllValue}
              id="acidAllPicker"
            />
          </label>
          <label>
            Těkavé kyseliny
            <input
              type="text"
              placeholder="Těkavé kyseliny"
              onChange={acidVolValue}
              id="acidVolPicker"
            />
          </label>
          <label>
            Bezcukerný extrakt
            <input
              type="text"
              placeholder="Bezcukerný extrakt"
              onChange={withoutSugarValue}
              id="withoutSugarPicker"
            />
          </label>
          <label>
            SO2 volný
            <input
              type="text"
              placeholder="SO2 volný"
              onChange={so2FreeValue}
              id="so2FreePicker"
            />
          </label>
          <label>
            SO2 veškerý
            <input
              type="text"
              placeholder="SO2 veškerý"
              onChange={so2AllValue}
              id="so2AllPicker"
            />
          </label>
          <label>
            Poznámka
            <input
              type="text"
              placeholder="Poznámka"
              onChange={noteValue}
              id="notePicker"
            />
          </label>
          <button className={styles.button} onClick={submitNote}>
            Upravit analytiku
          </button>
        </div>
      </div>
      <div className={styles.closeBox}>
        <VscError onClick={showInput} />
      </div>
    </div>
  )
}
