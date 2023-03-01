import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function SprayEdit({ spray, userEmail }: any) {
  const { setEditSpray, setSpraysLoading } = useStateContext()

  const [name, setName] = useState("")
  const [pack, setPack] = useState("")
  const [price, setPrice] = useState("")
  const [use, setUse] = useState("")
  const [desc, setDesc] = useState("")
  const [cat, setCat] = useState("")

  const nameValue = (e: any) => {
    setName(e.target.value)
  }

  const packValue = (e: any) => {
    setPack(e.target.value)
  }

  const priceValue = (e: any) => {
    setPrice(e.target.value)
  }

  const useValue = (e: any) => {
    setUse(e.target.value)
  }

  const descValue = (e: any) => {
    setDesc(e.target.value)
  }

  const catValue = (e: any) => {
    setCat(e.target.value)
  }

  const submitNote = async () => {
    try {
      await updateDoc(doc(db, "winemakers", userEmail, "sprays", spray.id), {
        name: name,
        pack: pack,
        price: price,
        use: use,
        desc: desc,
        cat: cat,
      })
      setEditSpray("")
      setSpraysLoading(false)
      toast.success("Postřik upraven!")
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  const showInput = () => {
    setEditSpray("")
  }

  useEffect(() => {
    const addName = document.getElementById("nameInput")
    if (addName != null) {
      ;(addName as HTMLInputElement).value = spray.name
      setName(spray.name)
    }
    const addPack = document.getElementById("packInput")
    if (addPack != null) {
      ;(addPack as HTMLInputElement).value = spray.pack
      setPack(spray.pack)
    }
    const addPrice = document.getElementById("priceInput")
    if (addPrice != null) {
      ;(addPrice as HTMLInputElement).value = spray.price
      setPrice(spray.price)
    }
    const addUse = document.getElementById("useInput")
    if (addUse != null) {
      ;(addUse as HTMLInputElement).value = spray.use
      setUse(spray.use)
    }
    const addDesc = document.getElementById("descInput")
    if (addDesc != null) {
      ;(addDesc as HTMLInputElement).value = spray.desc
      setDesc(spray.desc)
    }
    const addCat = document.getElementById("cats")
    if (addCat != null) {
      ;(addCat as HTMLInputElement).value = spray.cat
      setCat(spray.cat)
    }
  }, [])

  return (
    <div className={styles.addNoteShow}>
      <div className={styles.inputBox}>
        <label>
          <strong>Upravit postřik</strong>
        </label>
        <div className={styles.inputs}>
          <label>
            Název
            <input
              type="text"
              placeholder="Název"
              onChange={nameValue}
              required
              id="nameInput"
            />
          </label>
          <label>
            Balení v g / ml
            <input
              type="text"
              placeholder="Balení"
              onChange={packValue}
              required
              id="packInput"
            />
          </label>
          <label>
            Cena v Kč
            <input
              type="text"
              placeholder="Cena"
              onChange={priceValue}
              required
              id="priceInput"
            />
          </label>
          <label>
            Dávkování v g / ml na 1.000 l
            <input
              type="text"
              placeholder="Dávkování"
              onChange={useValue}
              required
              id="useInput"
            />
          </label>
          <label>
            Popis
            <input
              type="text"
              placeholder="Popis"
              onChange={descValue}
              id="descInput"
            />
          </label>
          <label>
            Kategorie
            <select name="cats" id="cats" onChange={catValue}>
              <option value="Insekticidy">Insekticidy</option>
              <option value="Fungicidy">Fungicidy</option>
              <option value="Herbicidy">Herbicidy</option>
              <option value="Hnojiva">Hnojiva</option>
              <option value="Ostatní">Ostatní</option>
            </select>
          </label>
          <button className={styles.button} onClick={submitNote}>
            Upravit postřik
          </button>
        </div>
      </div>
      <div className={styles.closeBox}>
        <VscError onClick={showInput} />
      </div>
    </div>
  )
}
