import AnalyticsForm from "./AnalyticsForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function AnalyticsAdd({ id }: any) {
  const { addAnVisibility, setAddAnVisibility } = useStateContext()

  const showInput = () => {
    setAddAnVisibility(!addAnVisibility)
  }

  return (
    <>
      {!addAnVisibility ? (
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
          <AnalyticsForm id={id} />
          <div className={styles.closeBox}>
            <VscError onClick={showInput} />
          </div>
        </div>
      )}
    </>
  )
}
