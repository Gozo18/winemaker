import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { useRouter } from "next/router"
import WineyardDoingsEdit from "./WineyardDoingsEdit"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../styles/Wine.module.scss"

export default function WineyardDoingsItem({ w, wineyardId }: any) {
  const router = useRouter()
  const { email, editDoings, setEditDoings, setWineyardsLoading } =
    useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(
        doc(db, "winemakers", email, "wineyards", wineyardId, "doings", id)
      )
      toast.success("Smazáno!")
      setWineyardsLoading(false)
    } catch (err) {
      toast.error("Něco se nepovedlo!")
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>, wid: any) => {
    if (w.id === wid) {
      setEditDoings(w.id)
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
      {editDoings === w.id ? (
        <WineyardDoingsEdit w={w} wineyardId={wineyardId} />
      ) : (
        <div className={styles.note}>
          <div className={styles.noteText}>
            <p>
              <strong>Datum:</strong> {dateFormat}
            </p>
            <p>
              <strong>Přípravek:</strong> {w.additive}
            </p>
            <p>
              <strong>Množství:</strong> {w.amount}
            </p>
            <p>
              <strong>Poznámka:</strong> {w.note}
            </p>
          </div>
          <div className={styles.noteIcons}>
            <div
              onClick={(e: any) => {
                if (window.confirm("Odstranit činnost?")) deleteNote(e, w.id)
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
