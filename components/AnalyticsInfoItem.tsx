import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../styles/Wine.module.scss"
import AnalyticsInfoEdit from "./AnalyticsInfoEdit"

export default function AnalyticsInfoItem({ w, wineId, key }: any) {
  const router = useRouter()
  const { email, editAn, setEditAn, setWinesLoading } = useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(
        doc(db, "winemakers", email, "wines", wineId, "analytics", id)
      )
      toast.success("Smazáno!")
      setWinesLoading(false)
    } catch (err) {
      toast.error("Něco se nepovedlo!")
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>, wid: any) => {
    if (w.id === wid) {
      setEditAn(w.id)
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
      {editAn === w.id ? (
        <AnalyticsInfoEdit w={w} wineId={wineId} />
      ) : (
        <div className={styles.note} key={key}>
          <div className={styles.noteText}>
            <p>
              <strong>Datum:</strong> {dateFormat}
            </p>
            {!(w.sugar === undefined || w.sugar === "") && (
              <p>
                <strong>Cukr:</strong> {w.sugar}
              </p>
            )}
            {!(w.sugarGlu === undefined || w.sugarGlu === "") && (
              <p>
                <strong>Glukóza:</strong> {w.sugarGlu}
              </p>
            )}
            {!(w.sugarFru === undefined || w.sugarFru === "") && (
              <p>
                <strong>Fruktóza:</strong> {w.sugarFru}
              </p>
            )}
            {!(w.sugarSach === undefined || w.sugarSach === "") && (
              <p>
                <strong>Sacharóza:</strong> {w.sugarSach}
              </p>
            )}
            {!(w.alcoholReal === undefined || w.alcoholReal === "") && (
              <p>
                <strong>Alkohol skutečný:</strong> {w.alcoholReal}
              </p>
            )}
            {!(w.alcoholAll === undefined || w.alcoholAll === "") && (
              <p>
                <strong>Alkohol celkový:</strong> {w.alcoholAll}
              </p>
            )}
            {!(w.density === undefined || w.density === "") && (
              <p>
                <strong>Hustota relativní:</strong> {w.density}
              </p>
            )}
            {!(w.acidAll === undefined || w.acidAll === "") && (
              <p>
                <strong>Celkové kyseliny:</strong> {w.acidAll}
              </p>
            )}
            {!(w.acidVol === undefined || w.acidVol === "") && (
              <p>
                <strong>Těkavé kyseliny:</strong> {w.acidVol}
              </p>
            )}
            {!(w.withoutSugar === undefined || w.withoutSugar === "") && (
              <p>
                <strong>Bezcukerný extrakt:</strong> {w.withoutSugar}
              </p>
            )}
            {!(w.so2Free === undefined || w.so2Free === "") && (
              <p>
                <strong>SO2 volný:</strong> {w.so2Free}
              </p>
            )}
            {!(w.so2All === undefined || w.so2All === "") && (
              <p>
                <strong>SO2 veškerý:</strong> {w.so2All}
              </p>
            )}
            {!(w.note === undefined || w.note === "") && (
              <p>
                <strong>Poznámka:</strong> {w.note}
              </p>
            )}
          </div>
          <div className={styles.noteIcons}>
            <div
              onClick={(e: any) => {
                if (window.confirm("Odstranit analytiku?")) deleteNote(e, w.id)
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
