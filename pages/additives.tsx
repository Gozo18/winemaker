import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc";
import styles from '../styles/Additives.module.scss'

export default function additives() {
  const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading</p>;

    if (!user) router.push("/login");

    if (user)
      return (
        <div className={styles.additivesBox}>
            <h2>Přípravky</h2>

            <div className={styles.additivesSubmenu}>
                <h3 className={styles.activeAdd}>Čiření</h3>
                <h3>Enzymy</h3>
                <h3>Kvasinky</h3>
                <h3>Výživa</h3>
                <h3>Taniny</h3>
                <h3>Ostatní</h3>
            </div>

            <div className={styles.notes}>
                <div className={styles.note}>
                    <div>
                        <div className={styles.noteName}>PLANTIS AF</div>
                        <p>Balení: 1000g</p>
                        <p>Cena: 610,- Kč</p>
                        <p>Popis: čistý rostlinný protein (z hrachu), bez lepku</p>
                        <p>Dávkování: 10-30 g/hl</p>
                    </div>
                    <div className={styles.noteIcons}>
                        <VscEdit /> <VscTrash />
                    </div>
                </div>

            </div>
        </div>
    );
}
