import JarsForm from "./JarsForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from "../styles/AddNote.module.scss"

export default function JarsAdd({ id }: any) {
  const { addJarsVisibility, setAddJarsVisibility } = useStateContext()

  const showInput = () => {
    setAddJarsVisibility(!addJarsVisibility)
  }

  return (
    <>
      {!addJarsVisibility ? (
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
            <JarsForm id={id} />
            <div className={styles.closeBox}>
              <VscError onClick={showInput} />
            </div>
          </div>
        </>
      )}
    </>
  )
}
