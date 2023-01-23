import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from '../styles/Additives.module.scss'

export default function sprays() {
  const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading</p>;

    if (!user) router.push("/login");

    if (user)
      return (
        <div className={styles.additivesBox}>
            <h2>Postřiky</h2>

            <div className={styles.additivesSubmenu}>
                <h3 className={styles.activeAdd}>Insekticidy</h3>
                <h3>Fungicidy</h3>
                <h3>Herbicidy</h3>
                <h3>Hnojiva</h3>
                <h3>Ostatní</h3>
            </div>

            <div className={styles.notes}>
                <div className={styles.note}>
                    <div>
                        <div className={styles.noteName}>ROCK EFFECT</div>
                        <p>Balení: 5000ml</p>
                        <p>Cena: 1905,- Kč</p>
                        <p>Popis: protipožerový efekt</p>
                    </div>
                    <div className={styles.noteIcons}>
                        <VscEdit /> <VscTrash />
                    </div>
                </div>

            </div>
        </div>
    );
}
