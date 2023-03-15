import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import SprayEdit from "./SprayEdit"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../styles/Additives.module.scss"

export default function Spray({ spray, userEmail }: any) {
  const { editSpray, setEditSpray, setSpraysLoading } = useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(doc(db, "winemakers", userEmail, "sprays", id))
      toast.success("Smazáno!")
      setSpraysLoading(false)
    } catch (err) {
      toast.error("Něco se nepovedlo!")
      console.log(err)
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>, id: any) => {
    if (id === spray.id) {
      setEditSpray(spray.id)
    }
  }

  return (
    <>
      {editSpray === spray.id ? (
        <SprayEdit spray={spray} userEmail={userEmail} />
      ) : (
        <div className={styles.note}>
          <div className={styles.noteText}>
            <div className={styles.noteName}>{spray.name}</div>
            <p>
              <strong>Balení:</strong> {spray.pack} <span>ml/g</span>
            </p>
            <p>
              <strong>Cena:</strong> {spray.price}
              <span>,- Kč</span>
            </p>
            <p>
              <strong>Popis:</strong> {spray.desc}
            </p>
            <p>
              <strong>Dávkování:</strong> {spray.use}{" "}
              <span>ml/g na 1.000 l</span>
            </p>
          </div>
          <div className={styles.noteIcons}>
            <div
              onClick={(e: any) => {
                if (window.confirm("Odstranit postřik?"))
                  deleteNote(e, spray.id)
              }}
            >
              <VscTrash />
            </div>
            <div onClick={(e: any) => editFunc(e, spray.id)}>
              <VscEdit />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
