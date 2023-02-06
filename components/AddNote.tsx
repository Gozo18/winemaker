import { useState } from 'react'
import AddNoteForm from "./AddNoteForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from '../styles/AddNote.module.scss'

export default function AddNote(email: any) {

    const { addNoteVisibility, setaddNoteVisibility } = useStateContext();

    const showInput = () => {
        setaddNoteVisibility(!addNoteVisibility);
    }

    return (
        <>
            {!addNoteVisibility ? (
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
