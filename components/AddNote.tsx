import { useState } from 'react'
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import { VscDiffAdded, VscError } from "react-icons/vsc";
import styles from '../styles/AddNote.module.scss'

export default function AddNote(email: any) {
    const router = useRouter();

    const [visibility, setVisibility] = useState(false);
    const [date, setDate] = useState("");
    const [text, setText] = useState("");

    const showInput = () => {
        setVisibility(!visibility);
    }

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
            setVisibility(!visibility);
            toast.success("Poznámka přidána!");
        }
        catch(err) {
            console.log(err);
            toast.error("Něco se nepovedlo!");
        }
    }

    const dateInput = new Date()
    const year = dateInput.getFullYear()

    let month: number | string = dateInput.getMonth() + 1
    let day: number | string = dateInput.getDate()

    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day

    const today = `${year}-${month}-${day}` 
    if (visibility) {
        setTimeout(
        document.getElementById("datePicker").value = today
        , 500);
    }   

    return (
        <>
            {!visibility ? (
                <div className={styles.addNoteHidden} onClick={showInput}>
                    <button className={styles.button}><span><VscDiffAdded/></span> Přidat poznámku</button>
                </div>
            ) : (
                <div className={styles.addNoteShow}>
                    <div className={styles.inputBox}>
                        <label>Přidat poznámku</label>
                        <span>Vyberte datum  <input type="date" className={styles.date} onChange={dateValue} id="datePicker" /></span>
                        <input type="text" className={styles.text} placeholder='Poznámka' onChange={textValue} />
                        <button className={styles.button} onClick={submitNote}>Přidat poznámku</button>
                    </div>
                    <div className={styles.closeBox}>
                        <VscError onClick={showInput} />
                    </div>
                </div>
            )}
        </>
    )
}
