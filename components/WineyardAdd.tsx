import WineyardForm from "./WineyardForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function WineyardAdd() {
  const { addWineyardVisibility, setAddWineyardVisibility } = useStateContext()

  const showInput = () => {
    setAddWineyardVisibility(!addWineyardVisibility)
  }

  return (
    <>
      {!addWineyardVisibility ? (
        <div className={styles.addNoteHidden} onClick={showInput}>
          <button className={styles.button}>
            <span>
              <VscDiffAdded />
            </span>{" "}
            Přidat vinohrad
          </button>
        </div>
      ) : (
        <div className={styles.addNoteBox}>
          <WineyardForm />
          <div className={styles.closeBox}>
            <VscError onClick={showInput} />
          </div>
        </div>
      )}
    </>
  )
}
