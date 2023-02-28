import AddonsForm from "./AddonsForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function AddonsAdd({ id }: any) {
  const { addAddonsVisibility, setAddAddonsVisibility } = useStateContext()

  const showInput = () => {
    setAddAddonsVisibility(!addAddonsVisibility)
  }

  return (
    <>
      {!addAddonsVisibility ? (
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
          <AddonsForm id={id} />
          <div className={styles.closeBox}>
            <VscError onClick={showInput} />
          </div>
        </div>
      )}
    </>
  )
}
