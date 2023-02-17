import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import WineInfoEdit from "./WineInfoEdit"
import styles from "../styles/Wine.module.scss"
import HarvestInfoEdit from "./HarvestInfoEdit"

export default function HarvestInfoItem({ w, wineId, key }: any) {
  const router = useRouter()
  const { email, editPickup, setEditPickup, setWinesLoading } =
    useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(
        doc(db, "winemakers", email, "wines", wineId, "harvest", id)
      )
      toast.success("Smazáno!")
      setWinesLoading(false)
    } catch (err) {
      toast.error("Něco se nepovedlo!")
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>, wid: any) => {
    if (w.id === wid) {
      setEditPickup(w.id)
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
      {editPickup === w.id ? (
        <HarvestInfoEdit w={w} wineId={wineId} />
      ) : (
        <div className={styles.note} key={key}>
          <div className={styles.noteText}>
            <p>
              <strong>Datum:</strong> {dateFormat}
            </p>
            <p>
              <strong>Cukernatost:</strong> {w.sugar}
            </p>
            <p>
              <strong>Trať:</strong> {w.harvestPlace}
            </p>
            <p>
              <strong>Poznámka:</strong> {w.harvestNote}
            </p>
          </div>
          <div className={styles.noteIcons}>
            <div
              onClick={(e: any) => {
                if (window.confirm("Odstranit sběr?")) deleteNote(e, w.id)
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
