import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import WineInfoEdit from "./WineInfoEdit"
import styles from "../styles/Wine.module.scss"

export default function HarvestInfo({ thisWine }: any) {
  const router = useRouter()
  const { email, editPickup, setEditPickup, setWinesLoading } =
    useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(
        doc(db, "winemakers", email, "wines", thisWine[0].id, "harvest", id)
      )
      toast.success("Smazáno!")
      setWinesLoading(false)
      router.push("/current-wines ")
    } catch (err) {
      toast.error("Něco se nepovedlo!")
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditPickup(true)
  }

  return (
    <>
      {editPickup ? (
        <p>edit</p>
      ) : (
        <>
          {thisWine[0].harvest.map((w: any, i: number) => (
            <div className={styles.note} key={i}>
              <div className={styles.noteText}>
                <p>
                  <strong>Datum:</strong> {w.date}
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
                    if (window.confirm("Odstranit víno?")) deleteNote(e, w.id)
                  }}
                >
                  <VscTrash />
                </div>
                <div onClick={(e: any) => editFunc(e)}>
                  <VscEdit />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}
