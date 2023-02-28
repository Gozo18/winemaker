import FiltersForm from "./FiltersForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function FiltersAdd({ id }: any) {
  const { addFiltersVisibility, setAddFiltersVisibility } = useStateContext()

  const showInput = () => {
    setAddFiltersVisibility(!addFiltersVisibility)
  }

  return (
    <>
      {!addFiltersVisibility ? (
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
          <FiltersForm id={id} />
          <div className={styles.closeBox}>
            <VscError onClick={showInput} />
          </div>
        </div>
      )}
    </>
  )
}
