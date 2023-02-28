import BottlesForm from "./BottlesForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function BottlesAdd({ id }: any) {
  const { addBottlesVisibility, setAddBottlesVisibility } = useStateContext()

  const showInput = () => {
    setAddBottlesVisibility(!addBottlesVisibility)
  }

  return (
    <>
      {!addBottlesVisibility ? (
        <div className={styles.addNoteHidden} onClick={showInput}>
          <button className={styles.button}>
            <span>
              <VscDiffAdded />
            </span>{" "}
            Přidat záznam
          </button>
        </div>
      ) : (
        <div className={styles.addNoteBox}>
          <BottlesForm id={id} />
          <div className={styles.closeBox}>
            <VscError onClick={showInput} />
          </div>
        </div>
      )}
    </>
  )
}
