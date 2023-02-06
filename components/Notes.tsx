import { db } from "../config/firebase"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscEdit, VscTrash } from "react-icons/vsc";
import styles from '../styles/Notes.module.scss'

export default function Notes(email: any) {

    const { notesLoading, setNotesLoading, notesData, setNotesData } = useStateContext();

    if (!notesLoading) {
        const querySnapshot = async() => {
            try {
                const notesData: any = await getDocs(collection(db, "winemakers", email.email, "notes"));
                const notesArray: any = [];
                notesData.forEach((doc: any) => {
                    const pushData = doc.data();
                    pushData.id = doc.id;
                    pushData.timestamp = new Date(doc.data().date);
                    notesArray.push(pushData);
                });
                notesArray.sort((a: any, b: any) => a.timestamp - b.timestamp).reverse();
                setNotesData(notesArray);
                setNotesLoading(true);
            }
            catch(err) {
                toast.error("Něco se nepovedlo!");
            }
        } 
        
        querySnapshot();
    }

    const deleteNote = async(e: React.MouseEvent<HTMLButtonElement>, id?: any) => {
        try {
            await deleteDoc(doc(db, "winemakers", email.email, "notes", id));
            toast.success("Smazáno!");
            setNotesLoading(false);
        }
        catch(err) {
            toast.error("Něco se nepovedlo!");
        }
    }

    return (
        <>
            {notesData === undefined ? (
                <div>Načítám...</div>
            ) : (
                <div className={styles.notes}>
                    {notesData.map((doc: any,i: number) => (
                        <div className={styles.note} key={i}>
                            <div>
                                <div className={styles.noteDate}>Datum: {doc.date}</div>
                                <div>{doc.text}</div>
                            </div>
                            <div className={styles.noteIcons}>
                                <VscEdit /> <VscTrash onClick={(e:any) =>  { if (window.confirm('Odstranit poznámku?')) deleteNote(e, doc.id)}} />
                            </div>
                        </div>
                        )
                    )}
                </div>
            )}
        </>
    )
}
