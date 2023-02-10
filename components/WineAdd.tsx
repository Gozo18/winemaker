import WineForm from "./WineForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function WineAdd({ email }: any) {
  const { addWineVisibility, setAddWineVisibility } = useStateContext()

  const showInput = () => {
    setAddWineVisibility(!addWineVisibility)
  }

  return (
    <>
      {!addWineVisibility ? (
        <div className={styles.addNoteHidden} onClick={showInput}>
          <button className={styles.button}>
            <span>
              <VscDiffAdded />
            </span>{" "}
            Přidat víno
          </button>
        </div>
      ) : (
        <div className={styles.addNoteBox}>
          <WineForm email={email} />
          <div className={styles.closeBox}>
            <VscError onClick={showInput} />
          </div>
        </div>
      )}
    </>
  )
}
