import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../styles/Wine.module.scss"
import TendsInfoEdit from "./TendsInfoEdit"

export default function TendsInfoItem({ w, wineId }: any) {
  const router = useRouter()
  const { email, editTends, setEditTends, setWinesLoading } = useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(
        doc(db, "winemakers", email, "wines", wineId, "tends", id)
      )
      toast.success("Smazáno!")
      setWinesLoading(false)
    } catch (err) {
      toast.error("Něco se nepovedlo!")
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>, wid: any) => {
    if (w.id === wid) {
      setEditTends(w.id)
    }
  }

  const timestamp = new Date(w.date)
  const dateFormat =
    timestamp.getDate() +
    "." +
    (timestamp.getMonth() + 1) +
    "." +
    timestamp.getFullYear()

  return (
    <>
      {editTends === w.id ? (
        <TendsInfoEdit w={w} wineId={wineId} />
      ) : (
        <div className={styles.note}>
          <div className={styles.noteText}>
            <p>
              <strong>Datum:</strong> {dateFormat}
            </p>
            <p>
              <strong>Poznámka:</strong> {w.note}
            </p>
          </div>
          <div className={styles.noteIcons}>
            <div
              onClick={(e: any) => {
                if (window.confirm("Odstranit stáčku?")) deleteNote(e, w.id)
              }}
            >
              <VscTrash />
            </div>
            <div onClick={(e: any) => editFunc(e, w.id)}>
              <VscEdit />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
