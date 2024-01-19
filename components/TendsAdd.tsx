import TendsForm from "./TendsForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function TendsAdd({ id }: any) {
  const { addTendsVisibility, setAddTendsVisibility } = useStateContext()

  const showInput = () => {
    setAddTendsVisibility(!addTendsVisibility)
  }

  return (
    <>
      {!addTendsVisibility ? (
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
            <TendsForm id={id} />
            <div className={styles.closeBox}>
              <VscError onClick={showInput} />
            </div>
          </div>
        </>
      )}
    </>
  )
}
