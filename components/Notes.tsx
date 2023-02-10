import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import Note from "./Note"
import styles from "../styles/Notes.module.scss"

export default function Notes(email: any) {
  const { notesLoading, setNotesLoading, notesData, setNotesData } =
    useStateContext()

  if (!notesLoading) {
    const querySnapshot = async () => {
      try {
        const notesData: any = await getDocs(
          collection(db, "winemakers", email.email, "notes")
        )
        const notesArray: any = []
        notesData.forEach((doc: any) => {
          const pushData = doc.data()
          pushData.id = doc.id
          pushData.timestamp = new Date(doc.data().date)
          notesArray.push(pushData)
        })
        notesArray.sort((a: any, b: any) => a.timestamp - b.timestamp).reverse()
        setNotesData(notesArray)
        setNotesLoading(true)
      } catch (err) {
        toast.error("Něco se nepovedlo!")
      }
    }

    querySnapshot()
  }

  return (
    <>
      {notesData === undefined ? (
        <div>Načítám...</div>
      ) : (
        <div className={styles.notes}>
          {notesData.map((doc: any, i: any) => (
            <div key={i}>
              <Note note={doc} userEmail={email.email} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
