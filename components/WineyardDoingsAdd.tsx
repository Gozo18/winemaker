import WineyardDoingsForm from "./WineyardDoingsForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function WineyardDoingsAdd({ id }: any) {
  const { addDoingsVisibility, setAddDoingsVisibility } = useStateContext()

  const showInput = () => {
    setAddDoingsVisibility(!addDoingsVisibility)
  }

  return (
    <>
      {!addDoingsVisibility ? (
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
          <WineyardDoingsForm id={id} />
          <div className={styles.closeBox}>
            <VscError onClick={showInput} />
          </div>
        </div>
      )}
    </>
  )
}
