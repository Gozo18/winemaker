import AdditivesForm from "./AdditivesForm"
import { useStateContext } from "../config/context"
import { VscDiffAdded, VscError } from "react-icons/vsc"
import styles from '../styles/AddNote.module.scss'

export default function AdditivesAdd({ email }: any) {

    const { addAdditivesVisibility, setaddAdditivesVisibility } = useStateContext();

    const showInput = () => {
        setaddAdditivesVisibility(!addAdditivesVisibility);
    }

    return (
        <>
            {!addAdditivesVisibility ? (
                <div className={styles.addNoteHidden} onClick={showInput}>
                    <button className={styles.button}><span><VscDiffAdded/></span> Přidat přípravek</button>
                </div>
            ) : (
                <div className={styles.addNoteBox}>
                    <AdditivesForm email={email} />
                    <div className={styles.closeBox}>
                        <VscError onClick={showInput} />
                    </div>
                </div>
            )}
        </>
    )
}
