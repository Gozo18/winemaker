import PickupForm from "./PickupForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function PickupAdd({ id }: any) {
  const { addPickupVisibility, setAddPickupVisibility } = useStateContext()

  const showInput = () => {
    setAddPickupVisibility(!addPickupVisibility)
  }

  return (
    <>
      {!addPickupVisibility ? (
        <div className={styles.addNoteHidden} onClick={showInput}>
          <button className={styles.button}>
            <span>
              <VscDiffAdded />
            </span>{" "}
            Přidat záznam
          </button>
        </div>
      ) : (
        <>
          <div></div>
          <div className={styles.addNoteBox}>
            <PickupForm id={id} />
            <div className={styles.closeBox}>
              <VscError onClick={showInput} />
            </div>
          </div>
        </>
      )}
    </>
  )
}
