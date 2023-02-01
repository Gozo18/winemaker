import Link from "next/link"
import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc";
import styles from '../../styles/Notes.module.scss'

export default function notes() {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading</p>;

    if (!user) router.push("/login");

    if (user)
      return (
        <div className={styles.notesBox}>
            <h2>Poznámky</h2>

            <div className={styles.notes}>
                <div className={styles.note}>
                    <div>
                        <div className={styles.noteDate}>Datum: 25.11.2022</div>
                        <div>Dodat síru u VZ ps 2022.</div>
                    </div>
                    <div className={styles.noteIcons}>
                        <VscEdit /> <VscTrash />
                    </div>
                </div>

            </div>
        </div>
    );
}
