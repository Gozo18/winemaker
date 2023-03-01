import SpraysForm from "./SpraysForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function SpraysAdd({ email }: any) {
  const { addSpraysVisibility, setaddSpraysVisibility } = useStateContext()

  const showInput = () => {
    setaddSpraysVisibility(!addSpraysVisibility)
  }

  return (
    <>
      {!addSpraysVisibility ? (
        <div className={styles.addNoteHidden} onClick={showInput}>
          <button className={styles.button}>
            <span>
              <VscDiffAdded />
            </span>{" "}
            Přidat postřik
          </button>
        </div>
      ) : (
        <div className={styles.addNoteBox}>
          <SpraysForm email={email} />
          <div className={styles.closeBox}>
            <VscError onClick={showInput} />
          </div>
        </div>
      )}
    </>
  )
}
