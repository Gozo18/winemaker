import { useState, useEffect } from 'react'
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from '../styles/AddNote.module.scss'

export default function AddNoteForm(email: any) {

    const { addNoteVisibility, setaddNoteVisibility } = useStateContext();

    const [date, setDate] = useState("");
    const [text, setText] = useState("");

    const dateValue = (e: any) => {
        setDate(e.target.value);
    }

    const textValue = (e: any) => {
        setText(e.target.value);
    }

    const submitNote = async () => {
        try {
            await addDoc(collection(db, "winemakers", email.email, "notes"), {
                date: String(date),
                text: text
            });
            setDate("");
            setText("");
            setaddNoteVisibility("");
            toast.success("Poznámka přidána!");
        }
        catch(err) {
            console.log(err);
            toast.error("Něco se nepovedlo!");
        }
    }

    useEffect(() => {
        const addInput = document.getElementById("datePicker");
        if (addInput != null) {
            (addInput as HTMLInputElement).valueAsDate = new Date();
        }
      },[]);

    return (
        <div className={styles.addNoteShow}>
            <div className={styles.inputBox}>
                <label>Přidat poznámku</label>
                <span>Vyberte datum  <input type="date" className={styles.date} onChange={dateValue} id="datePicker" /></span>
                <textarea className={styles.text} placeholder='Vložte poznámku' onChange={textValue} />
                <button className={styles.button} onClick={submitNote}>Přidat poznámku</button>
            </div>
            
        </div>
    )
}
