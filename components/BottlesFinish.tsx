import { useState } from "react"
import { db } from "../config/firebase"
import { doc, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/BottlesFinish.module.scss"

export default function BottlesFinish({ thisWine }: any) {
  const { id, bottled } = thisWine[0]
  const { email, setWinesLoading } = useStateContext()

  const checkedValue = async () => {
    const bool = !bottled
    try {
      await setDoc(
        doc(db, "winemakers", email, "wines", id),
        {
          bottled: bool,
        },
        { merge: true }
      )

      setWinesLoading(false)
    } catch (err) {
      console.log(err)
      toast.error("Něco se nepovedlo!")
    }
  }

  return (
    <div className={styles.bottleBox}>
      <span className={styles.text}>Nalahvováno</span>
      <label className={styles.switch}>
        {bottled ? (
          <input type="checkbox" onChange={checkedValue} checked />
        ) : (
          <input type="checkbox" onChange={checkedValue} />
        )}
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}
