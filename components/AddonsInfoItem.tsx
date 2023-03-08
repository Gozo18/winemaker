import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../styles/Wine.module.scss"
import AddonsInfoEdit from "./AddonsInfoEdit"

export default function AddonsInfoItem({ w, wineId }: any) {
  const router = useRouter()
  const { email, editAddons, setEditAddons, setWinesLoading } =
    useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(
        doc(db, "winemakers", email, "wines", wineId, "addons", id)
      )
      toast.success("Smazáno!")
      setWinesLoading(false)
    } catch (err) {
      toast.error("Něco se nepovedlo!")
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>, wid: any) => {
    if (w.id === wid) {
      setEditAddons(w.id)
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
      {editAddons === w.id ? (
        <AddonsInfoEdit w={w} wineId={wineId} />
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
                if (window.confirm("Odstranit přípravek?")) deleteNote(e, w.id)
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
