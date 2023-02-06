import { useState, useEffect } from 'react'
import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { VscEdit, VscTrash } from "react-icons/vsc";
import styles from '../styles/Notes.module.scss'

export default function Notes(email: any) {

    const { notesData, setNotesData } = useStateContext();

    const [data, setData] = useState([]);

    if (!notesData) {
        const querySnapshot = async() => {
            try {
                const notesData: any = await getDocs(collection(db, "winemakers", email.email, "notes"));
                const notesArray: any = [];
                notesData.forEach((doc: any) => {
                    const pushData = doc.data();
                    pushData.id = doc.id;
                    console.log(new Date(doc.data().date));
                    pushData.timestamp = new Date(doc.data().date);
                    notesArray.push(pushData);
                });
                notesArray.sort((a: any, b: any) => a.timestamp - b.timestamp).reverse();
                setData(notesArray);
                setNotesData(true);
            }
            catch(err) {
                toast.error("Něco se nepovedlo!");
            }
        } 
        
        querySnapshot();
    }

    return (
        <>
            {data === undefined ? (
                <div>Načítám...</div>
            ) : (
                <div className={styles.notes}>
                    {data.map((doc: any,i: number) => (
                        <div className={styles.note} key={i}>
                            <div>
                                <div className={styles.noteDate}>Datum: {doc.date}</div>
                                <div>{doc.text}</div>
                            </div>
                            <div className={styles.noteIcons}>
                                <VscEdit /> <VscTrash />
                            </div>
                        </div>
                        )
                    )}
                </div>
            )}
        </>
    )
}
