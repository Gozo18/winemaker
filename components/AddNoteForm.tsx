import { useState, useEffect } from 'react'
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"
import styles from '../styles/AddNote.module.scss'

export default function AddNoteForm(email: any) {

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
            toast.success("Poznámka přidána!");
        }
        catch(err) {
            console.log(err);
            toast.error("Něco se nepovedlo!");
        }
    }

    useEffect(() => {
        const addInput = document.querySelector("#datePicker");
        if (addInput != null) {
            addInput.valueAsDate = new Date();
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
