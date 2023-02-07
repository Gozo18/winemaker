import { useState } from 'react'
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from '../styles/AddNote.module.scss'

export default function AdditivesForm({email}: any) {
    const { setaddAdditivesVisibility, setAdditivesLoading } = useStateContext();

    const [name, setName] = useState("");
    const [pack, setPack] = useState("");
    const [price, setPrice] = useState("");
    const [use, setUse] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("Čiření");

    const nameValue = (e: any) => {
        setName(e.target.value);
    }

    const packValue = (e: any) => {
        setPack(e.target.value);
    }

    const priceValue = (e: any) => {
        setPrice(e.target.value);
    }

    const useValue = (e: any) => {
        setUse(e.target.value);
    }

    const descValue = (e: any) => {
        setDesc(e.target.value);
    }

    const catValue = (e: any) => {
        setCat(e.target.value);
    }

    const submitNote = async () => {
        try {
            await addDoc(collection(db, "winemakers", email, "additives"), {
                name: name,
                pack: pack,
                price: price,
                use: use,
                desc: desc,
                cat: cat,
            });
            setaddAdditivesVisibility("");
            setAdditivesLoading(false);
            toast.success("Přípravek přidán!");
        }
        catch(err) {
            console.log(err);
            toast.error("Něco se nepovedlo!");
        }
    }

    return (
        <div className={styles.addNoteShow}>
            <div className={styles.inputBox}>
                <label><strong>Přidat přípravek</strong></label>
                <div className={styles.inputs}>
                    <label>Název
                        <input type="text" placeholder='Název' onChange={nameValue} required />
                    </label>
                    <label>Balení v g / ml
                        <input type="text" placeholder='Balení' onChange={packValue} required />
                    </label>
                    <label>Cena v Kč
                        <input type="text" placeholder='Cena' onChange={priceValue} required />
                    </label>
                    <label>Dávkování v g / ml na 1.000 l
                        <input type="text" placeholder='Dávkování' onChange={useValue} required />
                    </label>
                    <label>Popis
                        <input type="text" placeholder='Popis' onChange={descValue} />
                    </label>
                    <label>Kategorie
                        <select name="cats" id="cats" onChange={catValue}>
                            <option value="Čiření">Čiření</option>
                            <option value="Enzymy">Enzymy</option>
                            <option value="Kvasinky">Kvasinky</option>
                            <option value="Výživa">Výživa</option>
                            <option value="Taniny">Taniny</option>
                            <option value="Ostatní">Ostatní</option>
                        </select>
                    </label>
                    <button className={styles.button} onClick={submitNote}>Přidat přípravek</button>
                </div>
            </div>
            
        </div>
    )
}
