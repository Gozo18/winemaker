import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import EditNote from "./EditNote"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../styles/Notes.module.scss"

export default function Note({ note, key, userEmail }: any) {
  const { editNote, setEditNote, setNotesLoading } = useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(doc(db, "winemakers", userEmail, "notes", id))
      toast.success("Smazáno!")
      setNotesLoading(false)
    } catch (err) {
      toast.error("Něco se nepovedlo!")
      console.log(err)
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>, id: any) => {
    if (id === note.id) {
      setEditNote(note.id)
    }
  }

  const timestamp = new Date(note.date)
  const dateFormat =
    timestamp.getDate() +
    "." +
    (timestamp.getMonth() + 1) +
    "." +
    timestamp.getFullYear()

  return (
    <>
      {editNote === note.id ? (
        <EditNote note={note} userEmail={userEmail} key={key} />
      ) : (
        <div className={styles.note} key={key}>
          <div className={styles.noteText}>
            <div className={styles.noteDate}>Datum: {dateFormat}</div>
            <div>{note.text}</div>
          </div>
          <div className={styles.noteIcons}>
            <div onClick={(e: any) => editFunc(e, note.id)}>
              <VscEdit />
            </div>
            <div
              onClick={(e: any) => {
                if (window.confirm("Odstranit poznámku?"))
                  deleteNote(e, note.id)
              }}
            >
              <VscTrash />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
