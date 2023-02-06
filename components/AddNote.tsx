import { useState } from 'react'
import AddNoteForm from "./AddNoteForm"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from '../styles/AddNote.module.scss'

export default function AddNote(email: any) {

    const [visibility, setVisibility] = useState(false);

    const showInput = () => {
        setVisibility(!visibility);
    }

    return (
        <>
            {!visibility ? (
                <div className={styles.addNoteHidden} onClick={showInput}>
                    <button className={styles.button}><span><VscDiffAdded/></span> Přidat poznámku</button>
                </div>
            ) : (
                <div className={styles.addNoteBox}>
                    <AddNoteForm email={email.email} />
                    <div className={styles.closeBox}>
                        <VscError onClick={showInput} />
                    </div>
                </div>
            )}
        </>
    )
}
