import { useState, useEffect } from 'react'
import { db } from "../config/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscError } from "react-icons/vsc"
import styles from '../styles/AddNote.module.scss'

export default function EditNote({note, userEmail, key}: any) {

    const { setEditNote, setNotesLoading } = useStateContext();

    const [date, setDate] = useState();
    const [text, setText] = useState("");

    const dateValue = (e: any) => {
        setDate(e.target.value);
    }

    const textValue = (e: any) => {
        setText(e.target.value);
    }

    const submitNote = async () => {
        try {
            await updateDoc(doc(db, "winemakers", userEmail, "notes", note.id), {
                date: String(date),
                text: text
            });
            setEditNote("");
            setNotesLoading(false);
            toast.success("Poznámka upravena!");
        }
        catch(err) {
            console.log(err);
            toast.error("Něco se nepovedlo!");
        }
    }

    const showInput = () => {
        setEditNote("");
    }

    useEffect(() => {
        const addDate = document.getElementById("datePicker");
        if (addDate != null) {
            (addDate as HTMLInputElement).value = note.date;
            setDate(note.date);
        }
        const addText = document.getElementById("noteText");
        if (addText != null) {
            (addText as HTMLInputElement).value = note.text;
            setText(note.text);
        }
    },[]);

    return (
        <div className={styles.addNoteShow} key={key}>
            <div className={styles.inputBox}>
                <label><strong>Upravit poznámku</strong></label>
                <span>Vyberte datum  <input type="date" className={styles.date} onChange={dateValue} id="datePicker" /></span>
                <textarea className={styles.text} placeholder='Vložte poznámku' onChange={textValue} id="noteText" />
                <button className={styles.button} onClick={submitNote}>Upravit poznámku</button>
            </div>
            <div className={styles.closeBox}>
                <VscError onClick={showInput} />
            </div>    
        </div>
    )
}
