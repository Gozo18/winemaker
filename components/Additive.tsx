import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import AdditiveEdit from "./AdditiveEdit"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../styles/Additives.module.scss"

export default function Additive({ additive, userEmail }: any) {
  const { editAdditive, setEditAdditive, setAdditivesLoading } =
    useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(doc(db, "winemakers", userEmail, "additives", id))
      toast.success("Smazáno!")
      setAdditivesLoading(false)
    } catch (err) {
      toast.error("Něco se nepovedlo!")
      console.log(err)
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>, id: any) => {
    if (id === additive.id) {
      setEditAdditive(additive.id)
    }
  }

  return (
    <>
      {editAdditive === additive.id ? (
        <AdditiveEdit additive={additive} userEmail={userEmail} />
      ) : (
        <div className={styles.note}>
          <div className={styles.noteText}>
            <div className={styles.noteName}>{additive.name}</div>
            <p>
              <strong>Balení:</strong> {additive.pack}g/ml
            </p>
            <p>
              <strong>Cena:</strong> {additive.price},- Kč
            </p>
            <p>
              <strong>Popis:</strong> {additive.desc}
            </p>
            <p>
              <strong>Dávkování:</strong> {additive.use}g/hl
            </p>
          </div>
          <div className={styles.noteIcons}>
            <div
              onClick={(e: any) => {
                if (window.confirm("Odstranit poznámku?"))
                  deleteNote(e, additive.id)
              }}
            >
              <VscTrash />
            </div>
            <div onClick={(e: any) => editFunc(e, additive.id)}>
              <VscEdit />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
