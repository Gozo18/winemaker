import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscEdit, VscTrash } from "react-icons/vsc";
import styles from '../styles/Notes.module.scss'

export default function Note({note, key, userEmail}: any) {

    const { setNotesLoading } = useStateContext();

    const deleteNote = async(e: React.MouseEvent<HTMLButtonElement>, id?: any) => {
        try {
            await deleteDoc(doc(db, "winemakers", userEmail, "notes", id));
            toast.success("Smazáno!");
            setNotesLoading(false);
        }
        catch(err) {
            toast.error("Něco se nepovedlo!");
            console.log(err);
        }
    }

    console.log(userEmail);

    return (
        <div className={styles.note} key={key}>
            <div>
                <div className={styles.noteDate}>Datum: {note.date}</div>
                <div>{note.text}</div>
            </div>
            <div className={styles.noteIcons}>
                <VscEdit /> <VscTrash onClick={(e:any) =>  { if (window.confirm('Odstranit poznámku?')) deleteNote(e, note.id)}} />
            </div>
        </div>
    )
}
